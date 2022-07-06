
#Parte I - Criação de arquivos e diretórios  

##Dica: Para criação de arquivos vazios você pode utilizar o comando touch nome-do-arquivo.extensao.  

###1)Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.  
 mkdir unix_tests  
 cd unix_tests
2)Crie um arquivo de texto com o nome trybe.txt.  
 touch trybe.txt
3)Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt.  
 cp trybe.txt trybe_backup.txt  
4)Renomeie o arquivo trybe.txt.  
 mv trybe.txt trybe2.txt  
5)Dentro de unix_tests, crie um novo diretório chamado backup.  
 mkdir backup
6)Mova o arquivo trybe_backup.txt para o diretório backup.  
 mv trybe_backup.txt backup  
7)Dentro de unix_tests, crie um novo diretório chamado backup2.  
 mkdir backup2
8)Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.
 mv backup/trybe_backup.txt backup2
9)Apague a pasta backup.  
 como a pasta esta vazia usamos rmdir
 rmdir backup
10)Renomeie a pasta backup2 para backup.   
 mv backup2 backup  
11)Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.  
 pwd
12)Apague o diretório backup.  
 rm -r apaga o diretório com estrutura
 rm -r backup
13)Limpe o terminal
clear  
  
Para os exercícios 14 e 15, crie um arquivo de texto com o conteúdo abaixo, chamado skills.txt: 
touch skills.txt   
cat > skills.txt  
Internet  
Unix  
Bash  
HTML  
CSS  
JavaScript  
React  
SQL  
cltr+d  
14)Mostre na tela as 5 primeiras skills do arquivo skills.txt.  
head -5 skills.txt
15)Mostre na tela as 4 últimas skills do arquivo skills.txt. 
tail -4 skills.txt 
16)Apague todos os arquivos que terminem em .txt.  
rm*.txt
