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

Ocupa no mínimo a altura completa da página mas pode crescer se o conteúdo for maior (por mais que o conteúdo seja pequeno vai ocupar toda a altura da página, recomendado para layouts de páginas inteiras):
````
<body class="min-h-screen">
````

Ocupa fixamente toda a altura da página:
````
<body class="h-screen">
````

Esconde o conteúdo caso o tamanho dele ultrapasse os limites do elemento:
````
<div class="overflow-hidden">
````

Criar classes reutilitárias em Tailwind,
No arquivo 'input.css' (depois disso usa-se o nome da classe que foi utilizada para usar seus atributos):
````
@layer components {
    .'nome-da-classe' {
        @apply (layout da classe...)
    }
}
````
