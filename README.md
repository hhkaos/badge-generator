# badge-generator
I refuse to paid for conferencebadge.com so I created this script that uses an spreadsheet to generate the same badges.

## How it works?

1. Open [this spreadsheet](https://docs.google.com/spreadsheets/d/13J7bCeY26AaUGgW_2gOyLH5aulZFKQM_zwxMhfUJTGQ/edit?usp=sharing)

2. File -> Make a copy

3. Fill the spreadsheet with real data
Now it should look like this:<br><br>
<img src="/img/excel.png">

4. File -> Publish to the web -> Publish

5. Extract the ID from the URL, for example if your URL is this one:
https://docs.google.com/spreadsheets/d/13J7bCeY26AaUGgW_2gOyLH5aulZFKQM_zwxMhfUJTGQ/pubhtml the id is **13J7bCeY26AaUGgW_2gOyLH5aulZFKQM_zwxMhfUJTGQ**

6. Open the index.html adding the id paremeter like this: http://hhkaos.github.io/badge-generator/?id=13J7bCeY26AaUGgW_2gOyLH5aulZFKQM_zwxMhfUJTGQ&tab=1 and you should see something like this:<br><br>
<img src="/img/badges.png">
