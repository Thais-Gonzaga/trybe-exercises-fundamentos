#Parte I - Comandos de Input e Output

### 1)Navegue até a pasta unix_tests;  
### cd unix_tests
### 2)Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.  
### cat > skills2.txt
### Internet  
### Unix  
### Bash
### ctrl + d

### 3)Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.  
### cat >> skills2.txt
### Shell
### Teclado
### Mouse
### Notbook
### Fone
### sort < skills2.txt  

### 4)Conte quantas linhas tem o arquivo skills2.txt.  
### wc -l skills2.txt 

### 5)Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.  
### sort < skills2.txt | head -3  > top_skills.txt  

### 6)Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.  
### cat > phrases2.txt
### Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.
### Ser feliz sem motivo é a mais autêntica forma de felicidade.
### Não espere por uma crise para descobrir o que é importante em sua vida.
### O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.
### A vida é uma viagem que precisa ser feita, nao importa tao ruim sao as estradas e acomodações.

### 7)Conte o número de linhas que contêm as letras br.  
### wc -l | grep br phrases2.txt

### 8)Conte o número de linhas que não contêm as letras br.  
### wc -l | grep -br phrases2.txt

### 9)Adicione dois nomes de países ao final do arquivo phrases2.txt.  
###  cat >> phrases2.txt
### Brasil
### Mexico
### ou podemos usar o comando echo que adiciona direto
### echo "Brasil" >>  phrases2.txt 

### 10)Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos  
### cat phrases2.txt e countries.txt > bunch_of_things.txt   

### 11)Ordene o arquivo bunch_of_things.txt.  
### sort -o bunch_of_things.txt bunch_of_things.txt
### -o significa que você quer transferir em outro arquivo
