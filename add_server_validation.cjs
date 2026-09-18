const fs = require('fs');
const path = require('path');
const dir = 'e:/responsive-navbar-gallery-source - Copy/components/payment-processes';

function walk(directory) {
  let files = [];
  const items = fs.readdirSync(directory);
  for (const item of items) {
    const fullPath = path.join(directory, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(walk(fullPath));
    } else if (fullPath.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = walk(dir);
let changedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // 1. Add serverError state
  if (!content.includes('const [serverError, setServerError]')) {
    content = content.replace(
      /(const \[isProcessing,\s*setIsProcessing\] = useState\(false\);)/,
      '$1\n  const [serverError, setServerError] = useState<string | null>(null);'
    );
  }

  // 2. Add setServerError(null) inside handlePay
  if (!content.includes('setServerError(null);')) {
    content = content.replace(
      /(const handlePay = \([^)]*\) =>\s*\{[\s\S]*?setIsProcessing\(true\);)/,
      '$1\n    setServerError(null);'
    );
  }

  // 3. Inject random failure into setTimeout
  if (!content.includes('Math.random() < 0.3')) {
    content = content.replace(
      /setTimeout\(\(\) => \{\s*setIsProcessing\(false\);\s*setIsSuccess\(true\);\s*\}, 2000\);/g,
      `setTimeout(() => {
      // Simulate server-side validation rejection
      if (Math.random() < 0.3) {
        setServerError("Payment declined by the server. Please check your details and try again.");
        setIsProcessing(false);
        return;
      }
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);`
    );
  }

  // 4. Inject Error UI above the final submit button.
  // The final button usually contains "disabled={isProcessing}" or "disabled={isProcessing || isLoading}".
  // We'll prepend the error UI before the button's opening tag.
  if (!content.includes('{serverError && (')) {
    // Find the button that is likely the final submit button
    content = content.replace(
      /(<button\b[^>]*?disabled=\{isProcessing(?:[\s\S]*?)\}[^>]*>)/,
      `{serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}\n            $1`
    );
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
  }
}

console.log('Changed files:', changedCount);
