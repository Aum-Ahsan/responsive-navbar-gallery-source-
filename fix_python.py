import os
import re

base_dir = os.path.join(os.path.dirname(__file__), 'components', 'payment-processes')

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content

    # Find all input tags to restrict replacements
    def fix_input(match):
        tag = match.group(0)
        
        # We find all attributes like attr="value" or attr={value} or boolean attr
        # and keep only the first one
        
        attrs = re.findall(r'([a-zA-Z0-9_]+)=(?:"[^"]*"|\{[^\}]+\})|([a-zA-Z0-9_]+)', tag[6:-1])
        
        seen = set()
        new_tag = "<input"
        
        # Simple string splitting is dangerous if values have spaces.
        # Let's use a regex to match the full attribute including preceding whitespace
        for m in re.finditer(r'(\s+)([a-zA-Z0-9_]+)(=(?:"[^"]*"|\{[^\}]+\}))?', tag[6:-1]):
            space = m.group(1)
            attr_name = m.group(2)
            attr_val = m.group(3) or ""
            
            if attr_name in ['className', 'type', 'placeholder', 'value', 'id', 'name']:
                 new_tag += space + attr_name + attr_val
            elif attr_name not in seen:
                 seen.add(attr_name)
                 new_tag += space + attr_name + attr_val
                 
        # Preserve closing
        if tag.endswith('/>'):
            new_tag += " />"
        else:
            new_tag += ">"
            
        return new_tag

    # Use re.sub with function
    content = re.sub(r'<input\b[^>]+>', fix_input, content)

    if "PaymentProcess10.tsx" in filepath or "PaymentProcess19.tsx" in filepath:
        content = content.replace("onClick={(e) =>", "onClick={(e: any) =>")
        content = content.replace("onInput={(e) =>", "onInput={(e: any) =>")

    if "PaymentProcess42.tsx" in filepath:
        if "Check" not in content and "lucide-react" in content:
            content = content.replace("CreditCard,", "CreditCard, Check,")
            
    if "PaymentProcess66.tsx" in filepath:
         content = content.replace("step.desc", "''")

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))
