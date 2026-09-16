const fs = require('fs');

// CSS Filter approximations for testing
function applyFilter(r, g, b, filterStr) {
    // We just want to visually print out some results if possible, but actually we can just output an HTML file and open it.
    const html = `
    <html>
    <body style="background: #f0f0f0; padding: 50px; font-family: sans-serif;">
        <h2>Test Emoji Filters</h2>
        <div style="font-size: 100px; display: flex; gap: 20px;">
            <div style="filter: grayscale(100%) brightness(30%);">👟</div>
            <div style="filter: sepia(100%) hue-rotate(180deg) saturate(400%) brightness(90%);">👟</div>
            <div style="filter: sepia(100%) hue-rotate(330deg) saturate(400%) brightness(90%);">👟</div>
            <div style="filter: sepia(100%) hue-rotate(90deg) saturate(400%) brightness(90%);">👟</div>
        </div>
        <hr/>
        <h3>Alternative (Hue-rotate only)</h3>
        <div style="font-size: 100px; display: flex; gap: 20px;">
            <div style="filter: grayscale(100%) brightness(30%);">👟</div>
            <div style="filter: hue-rotate(0deg);">👟</div>
            <div style="filter: hue-rotate(130deg) saturate(150%);">👟</div>
            <div style="filter: hue-rotate(-100deg) saturate(150%);">👟</div>
        </div>
        <hr/>
        <h3>Alternative 2 (Different order of sepia)</h3>
        <div style="font-size: 100px; display: flex; gap: 20px;">
            <div style="filter: grayscale(100%) brightness(30%);">👟</div>
            <div style="filter: sepia(100%) hue-rotate(190deg) saturate(500%);">👟</div>
            <div style="filter: sepia(100%) hue-rotate(320deg) saturate(500%);">👟</div>
            <div style="filter: sepia(100%) hue-rotate(70deg) saturate(500%);">👟</div>
        </div>
    </body>
    </html>
    `;
    fs.writeFileSync('e:\\responsive-navbar-gallery-source - Copy\\scratch\\test.html', html);
}

applyFilter();
