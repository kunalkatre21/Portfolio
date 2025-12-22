Here is the comprehensive, portfolio-ready Markdown file.

I have structured this to tell the full story: **Act 1** focuses on the Design Strategy & Architecture (the new content you provided regarding the timeline, token structure, and platform integration), and **Act 2** focuses on the Engineering & Automation (the technical deep dive from the previous text file).

You can copy and paste the code block below directly into your portfolio.

***

```markdown
# Orchestrating Consistency: The Evolution of a Multi-Platform Design System

**Role:** Design Systems Architect  
**Timeline:** 2023 – 2025  
**The Stack:** Figma Variables, Token Studio, Style Dictionary, GitHub Actions, Kotlin, Swift

---

## 1. Executive Summary

**The Vision:**  
To shift the ownership of design logic back to designers. I wanted to create a system where a design decision made in Figma (e.g., "Change Primary Color") propagates seamlessly into production code for iOS, Android, and Web without developer intervention.

**The Result:**  
We moved from manual JSON handoffs to a fully automated CI/CD pipeline. By structuring our tokens into a tiered architecture and implementing custom build scripts, we achieved **100% parity between design and code** and reduced update cycles from days to minutes.

---

## 2. The Context: Evolution of the Workflow

To understand the solution, we must look at how our process evolved alongside the industry tools.

### Phase 1: The Manual Era (2020 – Early 2023)
*   **The State:** Figma had no concept of variables. We relied on static Styles.
*   **The Handoff:** We exported raw values into JSON files.
*   **The Friction:** Developers manually translated these JSONs into `colors.xml` or `Xcassets`. This was the "Danger Zone"—where human error introduced inconsistencies between platforms.

### Phase 2: The Variable Era (Late 2023 – 2024)
*   **The Shift:** Figma introduced Variables (June 2023). We adopted them immediately for theming.
*   **The Gap:** While Figma got smarter, the handoff remained archaic. We were still exporting JSON blobs that required manual parsing by engineers to fit into Kotlin or CSS structures.

### Phase 3: The Integrated Ecosystem (2025)
*   **The Solution:** An automated pipeline where "Design is Code."
*   **The Mechanism:** Using **Token Studio** as the aggregator and **Style Dictionary** as the translator, we eliminated the manual developer step entirely.

---

## 3. The Architecture: Design Decisions as Data

To support our three distinct platforms—**Native iOS (iPad)**, **Native Android (M3)**, and **Web (Shadcn/UI)**—I engineered a three-tier token architecture.

### The Tiered Structure
1.  **Primitive Tokens:**
    *   *Role:* The raw ingredients.
    *   *Examples:* `Black.100` ... `Black.900`, `Blue.500`.
2.  **Semantic Tokens:**
    *   *Role:* The context (The "Why"). These are the core decisions of the design system.
    *   *Examples:* `Background.Primary`, `Text.Secondary`, `Border.Error`.
    *   *Strategy:* Native platform libraries link to *these* tokens.
3.  **Component Tokens:**
    *   *Role:* Specific component instructions.
    *   *Examples:* `Button.bg.primary`, `Card.border.radius`.

### Multi-Platform Strategy
We maintain separate Figma libraries for each platform to respect their native patterns (e.g., iOS Human Interface Guidelines vs. Android Material 3).

*   **The Link:** I used the **Token Studio Plugin** in each library file to import the Core Semantic Tokens.
*   **The Flow:**
    *   `Core System` → Defines `Semantic.Primary`
    *   `iOS Library` → Inherits `Semantic.Primary` → Maps to `Button.UiKit.Fill`
    *   `Android Library` → Inherits `Semantic.Primary` → Maps to `M3.Ref.Primary`

---

## 4. The Bridge: From Figma to Git

The technical challenge was creating a "Single Source of Truth" from multiple Figma files.

**The Pivot Point:**
Instead of exporting files manually, I configured **Token Studio** to perform a **Single Push** to a centralized Git repository.
1.  **Aggregation:** Token Studio collects tokens from the iOS, Android, and Web libraries.
2.  **The Push:** It generates a massive JSON payload acting as the "Pivot."
3.  **The Trigger:** This push triggers a GitHub Action, handing the data off to our engineering pipeline.

---

## 5. The Engineering: Processing the Data

Once the data hits the repository, **Style Dictionary** takes over. However, raw design data is rarely "code-ready." I had to write custom middleware scripts to clean, resolve, and format the data for production.

### Challenge A: The "Dirty Data"
**Problem:** Token Studio exports often contain metadata (`$themes`, `$metadata`) that break build scripts.
**Solution:** I wrote a `parser.js` script that acts as a sanitizer before the build runs.

```javascript
// parser.js: The "Janitor" Script
// We explicitly strip metadata to ensure only pure token data enters the build.
delete obj['$themes'];
delete obj['$metadata'];
```

### Challenge B: The "Broken Link"
**Problem:** Deep aliasing (e.g., `button.bg` referencing `semantic.primary`) often resulted in broken paths during export, leaving us with raw text strings instead of linked values.
**Solution:** I engineered a `resolve-relative-references.js` transformer. It proactively hunts for missing parent paths and auto-corrects references on the fly.

### Challenge C: Native-First Output
**Problem:** Developers don't want generic JSON. They want idiomatic code.
**Solution:** We created custom formatters for each platform.

*   **For iOS (SwiftUI):** The system generates `TypographyStyle` structs that automatically support **Dynamic Type** scaling.
*   **For Android (Compose):** The system maps tokens directly into the `MaterialTheme` object, so developers can use standard M3 APIs (`MaterialTheme.colorScheme.primary`).

---

## 6. The Outcome: Invisible Handoff

The success of this project isn't just in the code—it's in the culture.

*   **Ownership:** Designers now fully own the decision-making process. If a color is wrong in the app, the designer fixes it in Figma, pushes the code, and it's solved.
*   **Efficiency:** We reduced the time to update system-wide tokens from **2 days to ~5 minutes**.
*   **Zero Handoff:** Developers no longer copy-paste hex codes. They simply review a Pull Request titled **"🎨 Auto-update: Style Dictionary changes"** and hit Merge.

### Retrospective
We initially aimed to automate everything, including complex component styling. However, we found that focusing strictly on **Tokens (Color, Typography, Spacing)** provided 80% of the value with only 20% of the maintenance effort. This "Tokens-First" approach proved to be the sweet spot for our DesignOps maturity.
```