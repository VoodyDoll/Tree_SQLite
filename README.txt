Как перенести файлы из оной ветки в другую?

Переключаемся на ветку, куда нужно переместить файл, например
git checkout master

Забираем из другой ветки нужный файл
git checkout $branch_name -- $paths_to_file
где paths путь до файла, возможно можно указать сразу несколько путей через пробел, не помню уже

Ну конечно же в той ветке, в которую вы изначально файлы поместили, они останутся, их нужно удалить самому, если они не нужны там.

CREATE TABLE coffe (
    post_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    cost INT,
    consists TEXT,
    method TEXT, 
    img TEXT
    );

INSERT INTO coffe ( name, cost, consists, method, img )
VALUES ( 'Прекрасная звезда',
 900 ,
'shbtaky',
 'Great tutorial for beginners.',
 './images/boot7.jpg'
  );

  SELECT *
FROM coffe;

Но repId не входит в объект FindedUsers, а передаётся отдельно.
Собственно вопрос, как я могу добавить его внутри цикла each?:

<input type="hidden" name="repId" value="{{../repId}}">

