# %number%. %title%
You can find the problem [here](%link%).

## Problem
%problem%

{% for example in examples %}
### Example %loop.index%:
-   **Input:** `%example.input%`
-   **Output:** `%example.output%`
{% endfor %}

## Solution
%solution%

### Complexity Analysis
-   **Time complexity:** `%time%`.
-   **Space complexity:** `%space%`.

### Code
```%language%
%code%
```