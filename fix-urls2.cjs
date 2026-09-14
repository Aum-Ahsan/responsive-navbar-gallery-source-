const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync('dir /s /b *.tsx', { encoding: 'utf-8' }).split('\r\n').filter(f => f);

const avatar1 = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80';
const avatar2 = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80';
const slackIcon = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg';
const jiraIcon = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg';
const videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';

let count = 0;

for (const file of files) {
  if (file.includes('node_modules')) continue;
  
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  // The critical fix: [^`"'$]+ ensures we don't accidentally swallow JSX syntax or string terminators.
  content = content.replace(/https:\/\/i\.pravatar\.cc\/[^`\"\'\$]+/g, avatar1);
  content = content.replace(/https:\/\/api\.dicebear\.com\/[^`\"\'\$]+/g, avatar2);
  
  content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/7\/76\/Slack_Icon\.png/g, slackIcon);
  content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/8\/82\/Jira_%28Software%29_logo\.svg\/512px-Jira_%28Software%29_logo\.svg\.png/g, jiraIcon);
  
  content = content.replace(/https:\/\/cdn\.pixabay\.com\/video\/2017\/10\/12\/12330-238475510_large\.mp4/g, videoUrl);

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    count++;
    console.log(`Updated ${file}`);
  }
}

console.log(`Successfully updated ${count} files.`);
