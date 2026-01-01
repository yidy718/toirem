#!/bin/bash

# Simple launch script for TOIREM presentation website

echo "🚀 Launching TOIREM Framework Presentation..."
echo ""
echo "Opening in your default browser..."

# Open the presentation in the default browser
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open index.html
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    xdg-open index.html
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    # Windows
    start index.html
else
    echo "Please open index.html manually in your browser"
fi

echo ""
echo "✅ Presentation website launched!"
echo ""
echo "Features:"
echo "  • 📊 Complete income thresholds for families 1-12"
echo "  • 🧮 Universal formula calculator"
echo "  • 📄 All markdown documents viewable"
echo "  • 💾 PDF download functionality"
echo "  • 📱 Responsive design for all devices"
echo ""
echo "© 2025 TOIREM Framework"