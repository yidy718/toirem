# TOIREM CANADA - PDF GENERATION GUIDE

## Overview
This guide provides instructions for generating professional PDF documents from the markdown files in this compliance package.

---

## Prerequisites

Install markdown-pdf package:
```bash
npm install -g markdown-pdf
```

---

## Available CSS Styles

### 1. toirem-simple.css
- Clean, minimalist design
- Best for official documents
- Black and white printing friendly
- Professional appearance

### 2. toirem-style.css
- Enhanced visual design
- Color accents and gradients
- Best for presentations
- Modern appearance

---

## PDF Generation Commands

### Basic Generation (Default Style)
```bash
npx markdown-pdf [source.md] -o [output.pdf]
```

### With Simple Style
```bash
npx markdown-pdf [source.md] -o [output.pdf] -s ../TIER_6_RESOURCES/toirem-simple.css
```

### With Enhanced Style
```bash
npx markdown-pdf [source.md] -o [output.pdf] -s ../TIER_6_RESOURCES/toirem-style.css
```

---

## Batch Generation Scripts

### Generate All TIER 1 Governance Documents
```bash
cd TIER_1_GOVERNANCE
for file in *.md; do
    npx markdown-pdf "$file" -o "../TIER_6_RESOURCES/PDFs/${file%.md}.pdf" \
    -s ../TIER_6_RESOURCES/toirem-simple.css
done
```

### Generate All TIER 2 Policy Documents
```bash
cd TIER_2_POLICY
for file in *.md; do
    npx markdown-pdf "$file" -o "../TIER_6_RESOURCES/PDFs/${file%.md}.pdf" \
    -s ../TIER_6_RESOURCES/toirem-simple.css
done
```

### Generate All Research Documents
```bash
cd TIER_3_EVIDENCE/Research_Documents
for file in *.md; do
    npx markdown-pdf "$file" -o "../PDFs/${file%.md}.pdf" \
    -s ../../TIER_6_RESOURCES/toirem-simple.css
done
```

### Generate Application Forms (Multilingual)
```bash
cd TIER_4_OPERATIONS
npx markdown-pdf Application_Form_Trilingual.md \
    -o ../TIER_6_RESOURCES/PDFs/Application_Form_Trilingual.pdf \
    -s ../TIER_6_RESOURCES/toirem-style.css
```

---

## Recommended PDF Generation by Document Type

| Document Type | Recommended Style | Command Example |
|---------------|------------------|-----------------|
| **Board Resolutions** | toirem-simple.css | `npx markdown-pdf Board_Resolution.md -o Board_Resolution.pdf -s ../TIER_6_RESOURCES/toirem-simple.css` |
| **CRA Submissions** | toirem-simple.css | `npx markdown-pdf CRA_LEGAL_FRAMEWORK.md -o CRA_LEGAL_FRAMEWORK.pdf -s ../TIER_6_RESOURCES/toirem-simple.css` |
| **Research Documents** | toirem-simple.css | `npx markdown-pdf MASTER_CALCULATIONS.md -o MASTER_CALCULATIONS.pdf -s ../TIER_6_RESOURCES/toirem-simple.css` |
| **Application Forms** | toirem-style.css | `npx markdown-pdf Application_Form.md -o Application_Form.pdf -s ../TIER_6_RESOURCES/toirem-style.css` |
| **Public Documents** | toirem-style.css | `npx markdown-pdf Executive_Summary.md -o Executive_Summary.pdf -s ../TIER_6_RESOURCES/toirem-style.css` |
| **Internal Guides** | toirem-style.css | `npx markdown-pdf Quick_Reference_Guide.md -o Quick_Reference_Guide.pdf -s ../TIER_6_RESOURCES/toirem-style.css` |

---

## Custom Options

### Page Size and Orientation
```bash
npx markdown-pdf [source.md] -o [output.pdf] \
    -f Letter \
    -r portrait
```

### Margins
```bash
npx markdown-pdf [source.md] -o [output.pdf] \
    -b 1in \
    -B 1in \
    -L 1in \
    -R 1in
```

### Header and Footer
```bash
npx markdown-pdf [source.md] -o [output.pdf] \
    -h "<div style='text-align:center'>Toirem Canada</div>" \
    -f "<div style='text-align:center'>Page <span class='pageNumber'></span></div>"
```

---

## Complete Example: Generate CRA Submission Package

```bash
#!/bin/bash
# generate_cra_package.sh

# Create PDF output directory
mkdir -p TIER_6_RESOURCES/PDFs/CRA_Package

# Generate all CRA submission documents
echo "Generating CRA submission package..."

# Tier 1: Governance
npx markdown-pdf TIER_1_GOVERNANCE/Board_Resolution_Eligibility_Framework_2025.md \
    -o TIER_6_RESOURCES/PDFs/CRA_Package/01_Board_Resolution.pdf \
    -s TIER_6_RESOURCES/toirem-simple.css

# Tier 2: Policy
npx markdown-pdf TIER_2_POLICY/CRA_LEGAL_FRAMEWORK_COMPLETE_2025.md \
    -o TIER_6_RESOURCES/PDFs/CRA_Package/02_CRA_Legal_Framework.pdf \
    -s TIER_6_RESOURCES/toirem-simple.css

npx markdown-pdf TIER_2_POLICY/Executive_Summary_Two_Tier_System.md \
    -o TIER_6_RESOURCES/PDFs/CRA_Package/03_Executive_Summary.pdf \
    -s TIER_6_RESOURCES/toirem-simple.css

# Tier 3: Evidence
npx markdown-pdf TIER_3_EVIDENCE/MASTER_CALCULATIONS_WITH_SOURCES_2025.md \
    -o TIER_6_RESOURCES/PDFs/CRA_Package/04_Master_Calculations.pdf \
    -s TIER_6_RESOURCES/toirem-simple.css

echo "CRA submission package generated successfully!"
```

---

## Quality Checks

Before generating PDFs for official use:

1. **Verify Content**: Ensure all markdown files are up to date
2. **Check Formatting**: Preview markdown files for proper formatting
3. **Test Generation**: Generate test PDFs to check appearance
4. **Review Output**: Verify tables, lists, and special characters render correctly
5. **Print Test**: Print a sample page to check readability

---

## Troubleshooting

### Issue: Unicode Characters Not Displaying
**Solution**: Ensure markdown files are UTF-8 encoded

### Issue: Tables Not Formatting Properly
**Solution**: Use proper markdown table syntax with alignment markers

### Issue: Page Breaks in Wrong Places
**Solution**: Add page break markers in markdown:
```markdown
<div style="page-break-after: always;"></div>
```

### Issue: Images Not Appearing
**Solution**: Use absolute paths or ensure relative paths are correct

---

## Output Directory Structure

```
TIER_6_RESOURCES/
├── PDFs/
│   ├── CRA_Package/        # Official CRA submission
│   ├── Board_Package/      # Board meeting materials
│   ├── Public_Package/     # Public information
│   └── Operations_Package/ # Internal operations
├── toirem-simple.css       # Simple style
├── toirem-style.css        # Enhanced style
└── PDF_Generation_Guide.md # This file
```

---

*Last Updated: December 30, 2025*