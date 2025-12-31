### INSTALAÇÃO:

Instalar o Tailwind:
````
https://tailwindcss.com/docs/installation/tailwind-cli
````

Iniciar o builder do CSS no terminal:
````
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
````

<hr>

### ANOTAÇÕES:

Usar cor hexadecimal:
````
<body class="bg-linear-to-l from-[#191970] to-[#3030D6]">
````

Síntaxe de fundo gradiente:
````
 - bg-linear-to-l from-[#191970] to-[#3030D6] (gradiente para a esquerda, começa com a cor do from e termina com a do to);
 - bg-linear-to-r from-[#191970] to-[#3030D6] (gradiente para a direita, começa com a cor do from e termina com a do to);
 ````
