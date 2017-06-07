## Positivo Framework



# Sistema de posicionamento em Flex Box

o sistema de grids criado leva em consideração as últimas novidades dos sistemas de grids antigos e a aplicação dos conceitos de flexbox atuais.

O posicionamento dos itens na tela dependem do entendimento do conceito aqui empregado.

* Grid 
O grid é o termo usado para o container.

O *Container* possui responsabilidade sobre os itens filhos diretos.

* Célula
Entendemos como célula um item que é filho e respeita as diretivas de um pai *Grid*

O Grid sempre virá indicando se seus filhos serão posicionados em *colunas* ou em *linhas*.

* As classes do grid incorporam conceitos de responsividade 
Classes com o sufixo *-sm* indicam que sua regra é valida para dispositivos mobile ou superiores. 
Classes com o sufixo *-md* indicam que sua regra é valida **somente** para dispositivos tablets ou superiores. Este conceito continua com *-lg*.
As classes de responsividade são explicadas mais adiante.

# Classes do Grid

## g-columns-sm ou g-rows-sm

    g-column-sm : serve para indicar que a div atual é um container que agrupa suas células (filhos) em colunas

    g-rows-sm : serve para indicar que a div atual é um container que agrupa suas células (filhos) em colunas

## c
    c : Representam as células de um grid

Exemplo:

Grid em <span style="color:blue">azul</span> 

Células em <span style="color:red">vermelho</span> 

Exemplo:
A
```xml

  <div class="g-columns-sm bg-color-primary">
        <!--1 coluna-->
        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div>

        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div>

        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div>

    </div>
```
A: em colunas
![alt text](./src/docs/images/a.jpg "Grid em colunas")



B

```xml

 <div class="g-rows-sm  bg-color-primary">
        <!--1 coluna-->
        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div>

        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div>

        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div>

    </div>
```
B: em linhas
![alt text](./src/docs/images/b.jpg "Grid em linhas")
 
# Alinhamento
O sistema de grid smepre procura alinhar os itens dem um determinado eixo, definidos em horizontal e vertical.  
( independente se está em *colunas* ou em *linhas*)

Isto significa que antes de definir o alinhamento, você deve definir em qual eixo deseja aplicar a propriedade de alinhamento

Exemplo:
```xml
g-horizontal-center-sm
```
* Alinhamento *horizontal* e *centralizado*

```xml
<div class="g-rows-sm g-horizontal-center-sm  bg-color-primary">
        <!--1 coluna-->
        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div>

        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div>

        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div>

    </div>
```

C: Centralizados no centro 
![alt text](./src/docs/images/c.jpg "Grid em linhas e centralizado no centro")


--


```xml
g-horizontal-end-sm
```

```xml
<div class="g-rows-sm g-horizontal-end-sm  bg-color-primary">
        <!--1 coluna-->
        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div>

        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div>

        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div>

    </div>
```
D: Centralizados no fim (end) 
![alt text](./src/docs/images/d.jpg "Grid em linhas e centralizado no centro")





```xml
g-vertical-center-sm
```

```xml

    <div class="g-rows-sm g-vertical-center-sm  bg-color-primary g-full-h">
        <!--1 coluna-->
        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div> 
    </div>

```
D: Vertical / Centralizado 
![alt text](./src/docs/images/g_vertical_center.jpg "Grid em linhas e centralizado no centro")


-------------------
```xml
g-vertical-end-sm
```

```xml

     <div class="g-rows-sm g-vertical-end-sm  bg-color-primary g-full-h">
        <!--1 coluna-->
        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div> 
    </div>

```
D: Vertical / End 
![alt text](./src/docs/images/g_vertical_end.jpg "Grid em linhas e centralizado no centro")


## Juntando as propriedades de alinhamento Horizontal e Vertical
```xml
g-vertical-end-sm
```

```xml

     <div class="g-rows-sm g-vertical-center-sm g-horizontal-end-sm bg-color-primary g-full-h">
        <!--1 coluna-->
        <div class="c wrapper-24">
            <div class="test-card"> </div>
        </div> 
    </div>

```
E: Vertical-Center / Horizontal-End 
![alt text](./src/docs/images/g_vertical_center_horizontal_end.jpg "Grid em linhas e centralizado no centro")
