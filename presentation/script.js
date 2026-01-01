// Document mapping to actual file paths
const documentMap = {
    'overview': {
        title: '2025 Income Thresholds & Universal Formula',
        content: 'default' // Shows the default HTML content
    },
    'calculator': {
        title: 'Universal Formula Calculator',
        content: 'calculator' // Shows calculator section
    },
    'board-resolution': {
        title: 'Board Resolution 2025',
        path: './TOIREM/TIER_1_GOVERNANCE/Board_Resolution_Eligibility_Framework_2025.md'
    },
    'privacy-policy': {
        title: 'Privacy & Confidentiality Policy',
        path: './TOIREM/TIER_1_GOVERNANCE/Privacy_and_Confidentiality_Policy.md'
    },
    'cra-compliance': {
        title: 'CRA Compliance Comparison',
        path: './TOIREM/TIER_1_GOVERNANCE/CRA_Compliance_Comparison.md'
    },
    'executive-summary': {
        title: 'Executive Summary - Two Tier System',
        path: './TOIREM/TIER_2_POLICY/Executive_Summary_Two_Tier_System.md'
    },
    'legal-framework': {
        title: 'CRA Legal Framework Complete',
        path: './TOIREM/TIER_2_POLICY/CRA_LEGAL_FRAMEWORK_COMPLETE_2025.md'
    },
    'implementation': {
        title: 'Implementation Roadmap 2025',
        path: './TOIREM/TIER_2_POLICY/Implementation_Roadmap_2025.md'
    },
    'master-calculations': {
        title: 'Master Calculations with Sources',
        path: './TOIREM/TIER_3_EVIDENCE/MASTER_CALCULATIONS_WITH_SOURCES_2025.md'
    },
    'living-costs': {
        title: 'Hasidic Family Living Costs Montreal',
        path: './TOIREM/TIER_3_EVIDENCE/Hasidic_Family_Living_Costs_Montreal_2025.md'
    },
    'cra-research': {
        title: 'CRA Compliance Research',
        path: './TOIREM/TIER_3_EVIDENCE/CRA_Compliance_Research_With_Sources.md'
    },
    // Research Documents
    'research-quebec-costs': {
        title: 'Quebec Cost of Living Analysis 2025',
        path: './TOIREM/TIER_3_EVIDENCE/Research_Documents/1_Quebec_Cost_of_Living_Analysis_2025.md'
    },
    'research-housing': {
        title: 'Montreal Housing Market 2025',
        path: './TOIREM/TIER_3_EVIDENCE/Research_Documents/2_Montreal_Housing_Market_2025.md'
    },
    'research-kosher': {
        title: 'Kosher Food Costs Montreal 2025',
        path: './TOIREM/TIER_3_EVIDENCE/Research_Documents/3_Kosher_Food_Costs_Montreal_2025.md'
    },
    'research-uk': {
        title: 'UK Comparison Data',
        path: './TOIREM/TIER_3_EVIDENCE/Research_Documents/4_UK_Comparison_Data.md'
    },
    'research-montreal-col': {
        title: 'Montreal Cost of Living Analysis',
        path: './TOIREM/TIER_3_EVIDENCE/Research_Documents/5_Montreal_Cost_of_Living_Analysis.md'
    },
    'research-differential': {
        title: 'Hasidic Family Cost Differential',
        path: './TOIREM/TIER_3_EVIDENCE/Research_Documents/6_Hasidic_Family_Cost_Differential.md'
    },
    'research-demographics': {
        title: 'Montreal Hasidic Demographics 2025',
        path: './TOIREM/TIER_3_EVIDENCE/Research_Documents/7_Montreal_Hasidic_Demographics_2025.md'
    },
    'research-hasidic-costs': {
        title: 'Hasidic Family Cost of Living Research',
        path: './TOIREM/TIER_3_EVIDENCE/Research_Documents/8_Hasidic_Family_Cost_of_Living_Research_2025.md'
    },
    'research-education': {
        title: 'Jewish Education Costs 2025',
        path: './TOIREM/TIER_3_EVIDENCE/Research_Documents/9_Jewish_Education_Costs_2025.md'
    },
    'application-form': {
        title: 'Application Form (Trilingual)',
        path: './TOIREM/TIER_4_OPERATIONS/Application_Form_Trilingual.md'
    },
    'quick-guide': {
        title: 'Quick Reference Guide',
        path: './TOIREM/TIER_4_OPERATIONS/Quick_Reference_Guide_Simplified_Process.md'
    },
    'assessment': {
        title: 'Income Assessment Worksheet',
        path: './TOIREM/TIER_4_OPERATIONS/Toirem_Income_Assessment_Worksheet.md'
    },
    'monthly-report': {
        title: 'Monthly Board Report Template',
        path: './TOIREM/TIER_5_TRACKING/Monthly_Board_Report_Template.md'
    },
    'audit-checklist': {
        title: 'Audit Checklist',
        path: './TOIREM/TIER_5_TRACKING/Audit_Checklist.md'
    },
    't3010': {
        title: 'Annual T3010 Worksheet',
        path: './TOIREM/TIER_5_TRACKING/Annual_T3010_Worksheet.md'
    }
};

// Store the original HTML content
let originalContent = '';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Store original content
    originalContent = document.getElementById('content-area').innerHTML;

    // Add click handlers to navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const docKey = this.getAttribute('data-doc');
            loadDocument(docKey);

            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Close mobile menu after selection
            if (window.innerWidth <= 1024) {
                closeSidebar();
            }
        });
    });

    // Initialize calculator
    calculateThreshold();

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            closeSidebar();
        }
    });
});

// Mobile menu functions
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (sidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Load document function
async function loadDocument(docKey) {
    const doc = documentMap[docKey];
    if (!doc) return;

    // Update title
    document.getElementById('doc-title').textContent = doc.title;

    const contentArea = document.getElementById('content-area');

    if (doc.content === 'default') {
        // Show original content
        contentArea.innerHTML = originalContent;
        calculateThreshold(); // Reinitialize calculator
    } else if (doc.content === 'calculator') {
        // Show only calculator section
        const calcSection = document.querySelector('.calculator-section');
        const costSection = document.querySelector('.cost-section');
        if (calcSection) {
            contentArea.innerHTML = calcSection.outerHTML + costSection.outerHTML;
            calculateThreshold(); // Reinitialize calculator
        }
    } else if (doc.path) {
        try {
            // Show loading state
            contentArea.innerHTML = '<div class="loading">Loading document...</div>';

            // Fetch markdown file
            const response = await fetch(doc.path);
            if (!response.ok) throw new Error('Failed to load document');

            const markdown = await response.text();

            // Convert markdown to HTML
            const html = marked.parse(markdown);

            // Display in content area with markdown styling
            contentArea.innerHTML = `<div class="markdown-content">${html}</div>`;

            // Add syntax highlighting if code blocks exist
            if (contentArea.querySelector('pre code')) {
                // You could add Prism.js or highlight.js here for better code highlighting
            }
        } catch (error) {
            contentArea.innerHTML = `
                <div class="error-message">
                    <h3>Error Loading Document</h3>
                    <p>Could not load the requested document. Please try again.</p>
                    <p class="error-detail">${error.message}</p>
                </div>
            `;
        }
    }
}

// Calculator function
function calculateThreshold() {
    const adults = parseInt(document.getElementById('adults')?.value || 2);
    const young = parseInt(document.getElementById('young')?.value || 0);
    const school = parseInt(document.getElementById('school')?.value || 0);
    const teens = parseInt(document.getElementById('teens')?.value || 0);

    // Calculate using the universal formula
    const adultCost = adults * 24143;
    const youngCost = young * 8500;
    const schoolCost = school * 9000;
    const teenCost = teens * 10000;

    const totalChildren = young + school + teens;
    const housingCost = 24000 + (totalChildren * 6000);
    const religiousObligations = 15966;

    const basicThreshold = adultCost + youngCost + schoolCost + teenCost + housingCost + religiousObligations;
    const maxAllowed = basicThreshold + 26144;
    const monthly = Math.round(basicThreshold / 12);

    // Update display
    const basicEl = document.getElementById('calc-basic');
    const maxEl = document.getElementById('calc-max');
    const monthlyEl = document.getElementById('calc-monthly');

    if (basicEl) basicEl.textContent = '$' + basicThreshold.toLocaleString();
    if (maxEl) maxEl.textContent = '$' + maxAllowed.toLocaleString();
    if (monthlyEl) monthlyEl.textContent = '$' + monthly.toLocaleString() + '/mo';
}

// Download as PDF function
async function downloadAsPDF() {
    try {
        // Show loading state
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Generating PDF...';
        button.disabled = true;

        // Get the content to convert
        const contentElement = document.getElementById('content-area');

        // Use html2canvas to capture the content
        const canvas = await html2canvas(contentElement, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        });

        // Create PDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');

        // Calculate dimensions
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        // Add the image to PDF
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add new pages if content is longer than one page
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        // Get current document title
        const docTitle = document.getElementById('doc-title').textContent;
        const filename = docTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.pdf';

        // Save the PDF
        pdf.save(filename);

        // Reset button
        button.textContent = originalText;
        button.disabled = false;

    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');

        // Reset button on error
        if (event.target) {
            event.target.textContent = '📄 Download PDF';
            event.target.disabled = false;
        }
    }
}

// Alternative PDF download using markdown-pdf (requires server-side processing)
function downloadMarkdownAsPDF() {
    // This would require a server endpoint to process markdown to PDF
    // For now, we'll use the client-side html2canvas approach above

    // Example of how it would work with a server:
    /*
    fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            markdown: currentMarkdownContent,
            title: document.getElementById('doc-title').textContent
        })
    })
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'document.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
    });
    */
}

// Add error message styling
const style = document.createElement('style');
style.textContent = `
    .loading {
        text-align: center;
        padding: 60px;
        font-size: 18px;
        color: var(--gray-600);
    }

    .error-message {
        text-align: center;
        padding: 60px;
        background: #fee;
        border-radius: 12px;
        border: 1px solid #fcc;
    }

    .error-message h3 {
        color: var(--danger);
        margin-bottom: 12px;
    }

    .error-detail {
        font-size: 14px;
        color: var(--gray-600);
        margin-top: 8px;
        font-family: 'JetBrains Mono', monospace;
    }
`;
document.head.appendChild(style);