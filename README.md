# Conversor de Moedas

Aplicação Web que se consiste em um sistema que converte valores entre as moedas Real, Euro e Dólar. Neste projeto utilizei **React** e também a biblioteca **ANTD**.

## Layout

A aplicação possui um Header que foi feito em um componente e colocado na página com sua tag. Abaixo há um **Router** que direciona entre duas páginas, o Home que contém a funcionalidade do site e o Sobre que da uma breve descrição do projeto e do desenvolvedor, essas paginas podem ser acessadas pelos **Links** que há no header.

### Home

![image](https://github.com/VitorComin/conversor-de-moedas/assets/106283734/85c332dd-fa91-441e-9254-9b89f6b6a8f5)


### Sobre

![image](https://github.com/VitorComin/conversor-de-moedas/assets/106283734/dc79a4ea-abcf-447e-b69f-cf0918a06c4a)


## Funcionalidade

A funcionalidade está na página Home, onde há dois selects e dois inputs (ambos utilizados da biblioteca de componentes ANTD). Ao modificar qualquer desses campos (modificando os selects, onde se indica a moeda do valor inicial e a moeda do valor final) e o primeiro input (indicando o valor), a conversão já é apresentada automaticamente no segundo input (que é um readOnly).

Essa conversão automatica foi feita utilizando **useState** e **useEffect**.

![image](https://github.com/VitorComin/conversor-de-moedas/assets/106283734/4477fae9-afc8-4341-a22e-3ffefcde0857)
-----------------------------
![image](https://github.com/VitorComin/conversor-de-moedas/assets/106283734/9d848ba5-11f1-40a7-a0ea-80407814ba21)


