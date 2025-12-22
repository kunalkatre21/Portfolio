
***

# Case Study: Automating Consistency — A Multi-Platform Design Token Pipeline

**Role:** Product Designer & Design Systems Architect
**Tools:** Figma (Token Studio), GitHub Actions, Style Dictionary, Jetpack Compose, SwiftUI, Shadcn.
**AI Stack:** Google AI Studio (Gemini), Cursor, Kilo, OpenRouter.

---

## 1. Executive Summary
In the transition from a purely visual design library to a code-aligned design system, we faced a classic friction point: the "hand-off gap." Developers were manually interpreting hex codes, leading to inconsistencies across Web, iOS, and Android.

**The Solution:** I architected "System 3.0"—a token-driven pipeline where Figma is the single source of truth. By utilizing **Token Studio** and **Style Dictionary**, I built an automated workflow that transforms design decisions into native platform code (Kotlin, Swift, CSS).

**The Unique Enabler:** Lacking deep Node.js expertise, I utilized **AI agents** to write custom build scripts, debug CI/CD pipelines, and create complex token transformers, effectively treating AI as my "Lead DevOps Engineer."

---

## 2. The Evolution

### Phase 1: Visual Foundation
*   **State:** A standard Figma library.
*   **Pain Point:** No code synchronization. Mobile developers hardcoded values. Dark mode implementation was manual and prone to error.

### Phase 2: Visual Upgrade (Material 3)
*   **State:** Updated UI components to match modern trends (Material 3).
*   **Pain Point:** While visually updated, the underlying architecture remained disconnected. Updating a brand color meant notifying three different engineering teams manually.

### Phase 3: The "Core" System (Current State)
*   **Goal:** "Write once, render everywhere."
*   **Strategy:** Decouple the *value* of a token from its *implementation*.
*   **Execution:** We mapped our custom brand tokens to native library tokens:
    *   **Android:** Mapped to Material 3 `ColorScheme`.
    *   **iOS:** Mapped to Apple's Human Interface Guidelines (via `.xcassets`).
    *   **Web:** Mapped to Shadcn/CSS variables.

---

## 3. Architecture: The "Token Chain"

To ensure the system supported native workflows (DX), I implemented a multi-tier token architecture.

1.  **Primitive Layer:** Raw values (e.g., `brand.purple.500` = `#6B5CE0`).
2.  **Semantic Layer:** Contextual usage (e.g., `background.brand` = `{brand.purple.500}`).
3.  **Component Layer:** Specific overrides (e.g., `button.primary.bg`).
4.  **Platform Mapping Layer (The Innovation):**
    Instead of forcing developers to use our custom names, I mapped our tokens to *their* native systems.

    *   **Android:** The build script generates a `MaterialTheme` object. The developer types `MaterialTheme.colorScheme.primary`, and it resolves to our brand purple.
    *   **iOS:** The build script generates strictly named Color Sets. The developer types `Color.primaryLabel`, and the OS handles the rest.

> **Why this matters:** We improved the Developer Experience (DX) by meeting them where they live. They don't need to learn a new language; the system injects our brand into their standard tools.

---

## 4. The Automation Pipeline (CI/CD)

The most complex part of this project was the delivery mechanism. Using GitHub Actions, I created a pipeline that runs on every push from Figma.

### The Workflow
1.  **Trigger:** Designer pushes changes from Figma Token Studio to the `MyStyleD` repo.
2.  **Sanitization (AI-Assisted):**
    *   *Challenge:* Token Studio exports JSON with metadata (`$themes`) that breaks build tools.
    *   *Solution:* A custom `prebuild.js` script acts as a "stagehand," scrubbing the JSON files and moving them to a temporary directory before the main build runs.
3.  **Transformation (Style Dictionary):**
    *   The system uses custom parsers and transforms (e.g., `resolve-relative-references.js`) to handle deep aliasing (e.g., `{color.background.primary}`).
    *   It generates platform-specific files: `colors.xml`, `Theme.kt`, `.colorset` folders, and `_variables.css`.
4.  **Distribution:**
    *   The GitHub Action clones the consumer repos (`web-app`, `android-app`, `ios-app`).
    *   It copies the generated files to the exact file path required by the app.
    *   It automatically creates a Pull Request in those repos with a summary of changes.

---

## 5. AI as Technical Co-Pilot

As a designer, setting up a Node.js-based CI/CD pipeline involving ES Modules, asynchronous imports, and complex regex parsing was outside my core skill set. I utilized AI (Google AI Studio, Cursor) to bridge this gap.

### Key Technical Challenges Solved with AI:

**1. The "ESM" Build Error:**
*   **Issue:** Style Dictionary v5 uses ES Modules, which broke the traditional `require()` syntax in my scripts.
*   **AI Solution:** The AI diagnosed the `[ERR_REQUIRE_ESM]` error and refactored the entire build script to use `async/await` and dynamic `import('style-dictionary')`.

**2. The "Silent Failure" in GitHub Actions:**
*   **Issue:** The pipeline claimed success, but files weren't appearing in the target repos.
*   **AI Solution:** The AI identified that GitHub Action steps run in isolated environments. It suggested using **Artifacts** to persist the build output between the "Build" job and the "Distribute" job.

**3. Complex Token Filtering:**
*   **Issue:** Android needed a specific slice of tokens (Material Scheme only), while iOS needed a different slice (Semantic Colors).
*   **AI Solution:** We wrote a custom logic in `config.js` using `isThemeToken` and `isNotThemeToken` filters to ensure the Android build didn't crash trying to process iOS-specific typography.

**4. iOS Color Set Generation:**
*   **Issue:** iOS requires a specific folder structure (`.colorset`) with a `Contents.json` file to support Light/Dark mode switching automatically.
*   **AI Solution:** We generated a custom action (`ios-colorsets-themed-action.js`) that reads both Light and Dark token sets simultaneously and merges them into a single Apple-compliant JSON structure.

---

## 6. Detailed Platform Implementation

### Android (Jetpack Compose)
I wanted Android developers to never see a Hex code. The system generates a file `AppColorScheme.kt`:

```kotlin
// Generated by Style Dictionary
val AppColorScheme = lightColorScheme(
    primary = StyleDictionaryColor.brandPurple500, // Mapped from tokens
    onPrimary = StyleDictionaryColor.neutral100,
    error = StyleDictionaryColor.red500
)
```
This allows the tokens to plug directly into the `MaterialTheme` wrapper.

### iOS (SwiftUI)
For iOS, the system handles the Dark Mode logic. By generating the `Contents.json` within `.xcassets`, the app automatically switches colors based on system settings.

```swift
// Usage in SwiftUI
Text("Hello")
    .foregroundColor(Color("textPrimary")) // Automatically switches #1a1a1a (Light) <-> #ffffff (Dark)
```

---

## 7. Results & Impact

*   **Zero Handoff:** Designers push to Git; Developers approve a PR. The manual "spec sheet" phase is eliminated.
*   **100% Consistency:** It is mathematically impossible for the iOS app to have a different Primary Blue than the Android app, as they are sourced from the same JSON.
*   **Scalability:** When we decided to darken the "Neutral-900" shade for accessibility, I updated it once in Figma. Within 5 minutes, PRs were waiting in all three application repositories.

## 8. Lessons Learned & Future Steps

**The "Button" Limit:**
We attempted to push this logic to the Component level (creating a token-aware `Button` component in code). While technically possible, maintaining the logic for component states (hover, pressed, disabled) across three different coding frameworks proved too bandwidth-intensive for a small team. We decided to keep the automation at the **Token/Style** level and let developers build the components using those tokens.

**Conclusion:**
This project proved that with the right architecture—and the assistance of AI to handle the heavy technical lifting—designers can own the "logic" of the design system all the way into the codebase, creating a truly integrated product development lifecycle.