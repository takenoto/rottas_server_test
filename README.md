# Entendendo
## app.js
Mostra como executar o código em javascript/node para manter um app rodando escutando as mudanças no db. Assim, não precisa checar a cada X segundos, o próprio db avisa das mudanças quando houver.
Os comandos em javascript dependem do nome do evento registrado no postgres. Só é "tc_pos_event" porque assim foi nomeado.
As notificações estão sendo recebidas normalmente. Testado escrevendo dados no respectivo db (usando pgAdmin 4) e dando console.log no que é recebido já no node. A conversão para json também está

## codigo_sql_trigger.sql
Aqui fica o código para criação de um trigger e uma função que irão disparar a notificação de atualização ou criação de novas posições na tabela tc_positions. Pra facilitar adotei a mesma nomenclatura que as tabelas do traccar, tanto o nome da tabela quanto o das colunas. A maior diferença foi que eliminei as colunas que não eram de interesse pra ficar mais fácild e ler. No momento tem "deviceid" (id do gps), "servertime" (acredito que é o momento em que a atualização da posição chega no servidor), "latitude" e "longitude". 