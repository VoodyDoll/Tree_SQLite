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

pragma table_info(coffe); получение имен столбцов

Вход в базу даннных .open roots.db


Но repId не входит в объект FindedUsers, а передаётся отдельно.
Собственно вопрос, как я могу добавить его внутри цикла each?:

<input type="hidden" name="repId" value="{{../repId}}">

при настройке понадобилось перезагрузить npm
npm rebuild



  <!-- Bootstrap Links -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <!-- JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
 
 
    <!-- Jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
 
    <!-- for handle Bar -->
    <script src="https://twitter.github.io/typeahead.js/js/handlebars.js"></script>

    <--модальнео окно-->
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </---->