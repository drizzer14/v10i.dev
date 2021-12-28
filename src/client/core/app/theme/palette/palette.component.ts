import { createGlobalStyle } from 'styled-components';

export const Palette = createGlobalStyle`
  :root {
    --transparent: rgba(255, 255, 255, 0);

    --hue: 210;
    
    --base-strong-up: hsl(var(--hue), 11%, 1%);
    --base-strong: hsl(var(--hue), 8%, 5%);
    --base-strong-down: hsl(var(--hue), 8%, 12%);

    --base-weak-up: hsl(var(--hue), 8%, 91%);
    --base-weak: hsl(var(--hue), 8%, 96%);
    --base-weak-down: hsl(var(--hue), 11%, 99%);

    --faint-strong-up: hsl(var(--hue), 11%, 40%);
    --faint-strong: hsl(var(--hue), 8%, 50%);
    --faint-strong-down: hsl(var(--hue), 8%, 60%);

    --faint-weak-up: hsl(var(--hue), 8%, 83%);
    --faint-weak: hsl(var(--hue), 8%, 86%);
    --faint-weak-down: hsl(var(--hue), 11%, 89%);

    --accent-strong-up: hsl(var(--hue), 89%, 40%);
    --accent-strong: hsl(var(--hue), 92%, 50%);
    --accent-strong-down: hsl(var(--hue), 92%, 60%);

    --accent-weak-up: hsl(var(--hue), 92%, 80%);
    --accent-weak: hsl(var(--hue), 92%, 86%);
    --accent-weak-down: hsl(var(--hue), 89%, 90%);

    --base-strong-text: var(--base-strong);
    
    --base-weak-background: var(--base-weak-down); 

    --faint-strong-background: var(--faint-weak);
    --faint-strong-text: var(--faint-strong-up);
    --faint-strong-line: var(--faint-strong-down);
    
    --faint-weak-background: var(--base-weak);
    --faint-weak-line: var(--faint-weak-up);

    @media (prefers-color-scheme: dark) {
      --transparent: rgba(0, 0, 0, 0);
    
      --base-strong-up: hsl(var(--hue), 15%, 92%);
      --base-strong: hsl(var(--hue), 9%, 96%);
      --base-strong-down: hsl(var(--hue), 9%, 99%);

      --base-weak-up: hsl(var(--hue), 15%, 26%);
      --base-weak: hsl(var(--hue), 9%, 22%);
      --base-weak-down: hsl(var(--hue), 9%, 18%);

      --faint-strong-up: hsl(var(--hue), 15%, 69%);
      --faint-strong: hsl(var(--hue), 9%, 66%);
      --faint-strong-down: hsl(var(--hue), 9%, 62%);

      --faint-weak-up: hsl(var(--hue), 15%, 16%);
      --faint-weak: hsl(var(--hue), 9%, 12%);
      --faint-weak-down: hsl(var(--hue), 9%, 8%);

      --accent-strong-up: hsl(var(--hue), 72%, 55%);
      --accent-strong: hsl(var(--hue), 72%, 50%);
      --accent-strong-down: hsl(var(--hue), 69%, 45%);

      --accent-weak-up: hsl(var(--hue), 69%, 24%);
      --accent-weak: hsl(var(--hue), 72%, 20%);
      --accent-weak-down: hsl(var(--hue), 72%, 16%);

      --base-weak-background: hsl(var(--hue), 9%, 10%);

      --faint-strong-background: var(--base-weak);
      --faint-strong-line: var(--faint-strong-down);

      --faint-weak-background: var(--faint-weak-down);
      --faint-weak-line: hsl(var(--hue), 9%, 6%);
    }
  }

  body {
    color: var(--base-strong-text);

    background-color: var(--base-weak-background);
  }
  
  a {
    color: var(--accent-strong);
    
    transition: color 150ms;

    &:hover,
    &:focus {
      color: var(--accent-strong-down);
    }
  }

  code {
    background-color: var(--faint-weak-background);
    border: 2px solid var(--base-weak-background);
  }
  
  pre > code {
    border: none;
  }
  
  ::selection {
    background-color: var(--accent-weak-down);
  }
`;
