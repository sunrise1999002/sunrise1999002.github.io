# 《萧山，潮起又潮落》

## Venv

pyenv install 3.10.12
pyenv virtualenv 3.10.12 mkdocs-env
pyenv activate mkdocs-env
pip install mkdocs mkdocs-material jieba
pip freeze > requirements.txt

## Build

mkdocs build

## Push

mkdocs gh-deploy --force

## License

© 2025 钱江赶潮人 ([@sunrise1999002](https://github.com/sunrise1999002))  
《萧山，潮起又潮落》 is licensed under  
[Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/)


