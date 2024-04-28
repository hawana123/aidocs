---
sidebar_position: 1
---

# 💬 Midjourney Complete Parameter List

| <div style={{width:80}}>**Parameter**</div> | **Usage**                                                                           | **Example**                         | **Notes**                                                                                                                                                                                      | **V5**                                                                                   | **V4**        | **V3**                              | **niji**      |
| ------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------- | ----------------------------------- | ------------- |
| Version                                     | After prompt, add:<ul><li>--v or —v</li><li>--version or —version</li></ul>         | vibrant california poppies --v 5    | Only supports 1, 2, 3, 4, 5.                                                                                                                                                                   |                                                                                          |               |                                     |               |
| Aspect Ratio                                | After prompt, add:<ul><li>--ar or —ar</li><li>--aspect or —aspect</li></ul>         | vibrant california poppies --ar 5:4 | <ul><li>Default is 1:1</li><li>Must be integer ratios e.g. 1.3:1 won't work, but 13:10 will</li><li>May cause slight changes when enlarging - e.g. 16:9 (1.75) may end up 7:4 (1.74)</li></ul> | ✅ Supports any ratio, but over 2:1 is experimental and may cause unpredictable results. | ✅ 1:2 to 2:1 | ✅ 5:2 to 2:5                       | ✅ 1:2 to 2:1 |
| No                                          | After prompt, add:<ul><li>--no or —no</li></ul>                                     | --no plants                         | Null                                                                                                                                                                                           | ✅                                                                                       | ✅            | ✅                                  | ✅            |
| Randomness                                  | After prompt, add number:<ul><li>--c or —c</li><li>--chaos or —chaos</li></ul>      | --c 10                              | 0 to 100, default 0                                                                                                                                                                            | ✅                                                                                       | ✅            | ✅                                  | ✅            |
| Stylization                                 | After prompt, add number:<ul><li>--s or —s</li><li>--stylize or —stylize</li></ul>  | --s 50                              | Default 100                                                                                                                                                                                    | ✅                                                                                       | ✅            | ✅                                  | ✅            |
| Detail                                      | After prompt, add:<ul><li>--q or —q</li><li>--quality or —quality</li></ul>         | woodcut birch forest --q .25        | Default 1. Only .25, .5, 1, 2. >2 downgraded to 2.                                                                                                                                             | ✅                                                                                       | ✅            | ✅                                  | ✅            |
| Seed                                        | After prompt, add:<ul><li>--seed or —seed</li><li>--sameseed or —sameseed</li></ul> | woodcut birch forest --seed 123     | <ul><li>Same text + seed gives same image</li><li>V1/2/3 and test versions can't regenerate same, only similar</li></ul>                                                                       | ✅                                                                                       | ✅            | ✅ But only similar                 | ✅            |
| Image Weight                                | After prompt, add:<ul><li>--iw or —iw</li></ul>                                     | flowers.jpg birthday cake --iw .5   | Defaults and ranges differ by version (AI applies this even if you don't)                                                                                                                      | ✅ Default 1, range 0.5-2                                                                | ❌            | ✅ Default 0.25, range -10000-10000 | ❌            |