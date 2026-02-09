export type featureType =  "Sheets" | "Panes" | "OmniContext" | "Plugins";

export const FEATURE_CONTENT: Record<featureType, string> = {
  Sheets:
    "Sheets give you a fast, flexible workspace to organize ideas without fighting rigid structure. Think of them as infinite canvases where content flows naturally, adapts to your workflow, and stays out of your way instead of nagging you with rules.",

  Panes:
    "Panes let you split, stack, and rearrange your workspace so everything you need is visible at once. No more tab hell or context switching — just clean, modular views that bend to how you think, not how some UI designer felt that day.",

  OmniContext:
    "OmniContext keeps track of what you’re working on across files, tools, and sessions, so you don’t have to. It surfaces relevant information exactly when you need it, reducing mental overhead and making your workflow feel weirdly telepathic.",

  Plugins:
    "Plugins extend the core experience without bloating it, letting you add only what you actually use. Whether it’s integrations, automations, or custom tools, plugins snap in cleanly and stay out of the way until you call them."
};

