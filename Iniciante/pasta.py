import os

pasta = input("Nome da pasta: ")

if not os.path.exists('pasta'):
    os.makedirs(pasta)
    os.chdir(pasta)
    arq = open("javascript.js", 'w')
    texto = []
    texto.append('var input = require(\'fs\').readFileSync(\'./dev/stdin\', \'utf8\');\n')
    texto.append("var lines = input.split(\'\\n\');")
    arq.writelines(texto)
    arq.close()

    os.makedirs("dev")
    os.chdir("dev")
    arq2 = open("stdin", 'w')
    arq2.close()