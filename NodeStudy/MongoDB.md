# 安装MongoDB
将`C:\Program Files\MongoDB\Server\3.0\bin`路径加入到系统的path环境变量中（能在系统的任何盘符，使用mongo命令了）
```
打开cmd
mongo --dbpath data文件路径（使用过程中不可关闭）
使用数据库服务端，之后客户端操作的data数据都保存在文件路径中
mongod（再开一个cmd）
使用数据库客户端，在这里可使用命令行对数据增删改查
```

- 列出所有数据库：show dbs 
- 使用某个数据库： use 数据库名字（不存在的，就是新建）
- 查看当前所在数据库： db
- 删除数据库，删除当前所在的数据库: db.dropDatabase();

### 索引和排序
- 为文档中的一些key加上索引(index)可以加快搜索速度。这一点不难理解，假如没有没有索引，我们要查找名字为Seven的电影，就必须在所有文档里逐个搜索。而如果对名字这个key加上索引值，则电影名这个字符串和数字建立了映射，这样在搜索的时候就会快很多。MongoDB里面为某个key加上索引的方式很简单，比如我们要对导演这个key加索引，则可以：`db.movie.ensureIndex({directed_by:1})`
- 这里的1是升序索引，如果要降序索引，用-1。默认是1

- MongoDB支持对输出进行排序，比如按名字排序：`db.movie.find().sort({'title':1}).pretty()`
- `db.movie.getIndexes()`将返回所有索引，包括其名字。
- 而`db.movie.dropIndex('index_name')`将删除对应的索引。

#### 插入数据：
- db.student({"name":"小明","age":"12","sex":"男"})

- student就是所谓的集合(第一次使用，集合将自动创建)。集合中存储着很多json。
- 我们不可能一条一条的insert。所以，我们希望用sublime在外部写好数据库的形式，然后导入数据库：
```
mongoimport --db test --collection restaurants --drop --file primer-dataset.json
-db test  想往哪个数据库里面导入
--collection restaurants  想往哪个集合中导入
--drop 把集合清空
--file primer-dataset.json  哪个文件
```
这样，我们就能用sublime创建一个json文件，然后用mongoimport命令导入，这样学习数据库非常方便。

#### 查找数据(没有条件默认返回所有collection）: `db.restaurants.find()`
- 后面加上.pretty()输出的是经格式美化后的数据,
- 在这些查询里，key的单双引号都是可选的
- 精确匹配：`db.student.find({"score.shuxue":70})`
- 多个条件：`db.student.find({"score.shuxue":70 , "age":12})`
- 大于条件：`db.student.find({"score.yuwen":{$gt:50}});`
- 局部查询,有的时候，我们需要的，仅仅是部分数据，这个时候，find的局部查询的功能就派上用场了。先来看一个例子，返回tags为drama的电影的名字和首映日期.`db.movie.find({'tags':'drama'},{'debut':1,'title':1}).pretty()`
- 数据库将返回：
```
{
	"_id" : ObjectId("549cfb42f685c085f1dd47d4"),
	"title" : "Forrest Gump",
	"debut" : ISODate("1994-08-05T16:00:00Z")
}
{
	"_id" : ObjectId("549cff96f685c085f1dd47d6"),
	"title" : "Fight Club",
	"debut" : ISODate("1999-11-14T16:00:00Z")
}
{
	"_id" : ObjectId("549cff96f685c085f1dd47d7"),
	"title" : "Seven",
	"debut" : ISODate("1995-10-21T16:00:00Z")
}
```
- 这里find的第二个参数是用来控制输出的，1表示要返回，而0则表示不返回。默认值是0，但_id是例外，因此如果你不想输出_id，需要显式地声明：`db.movie.find({'tags':'drama'},{'debut':1,'title':1,'_id':0}).pretty()`
##### 正则表达式
MongoDB还支持基于正则表达式的查询。比如，查找标题以b结尾的电影信息：
- `db.movie.find({title:{$regex:'.*b$'}}).pretty()`
- 也可以写成：`db.movie.find({title:/.*b$/}).pretty()`
- 查找含有'Fight'标题的电影：`db.movie.find({title:/Fight/}).pretty()`
- 注意以上匹配都是区分大小写的，如果你要让其不区分大小写，则可以：`db.movie.find({title:{$regex:'fight.*b',$options:'$i'}}).pretty()`
##### 文本搜索
- 对文本搜索之前，我们需要先对要搜索的key建立一个text索引。假定我们要对标题进行文本搜索，我们可以先给标题设立一个索引：`db.movie.ensureIndex({title:'text'})`
- 接着我们就可以对标题进行文本搜索了，比如，查找带有"Gump"的标题：`db.movie.find({$text:{$search:"Gump"}}).pretty()`注意text和search前面的$符号。

#### 修改数据（默认只修改第一个符合条件的）：`db.student.update({"name":"小明"},{$set:{"age":16}})`
- 更改所有匹配项目`db.student.update({"sex":"男"},{$set:{"age":33}},{multi: true})`
- 完整替换`db.student.update({"name":"小明"},{"name":"大明","age":16});`
除了更换数据，MongoDB还提供了很多灵活的更新选项，具体可以看：`http://docs.mongodb.org/manual/reference/operator/update-field/`
##### 提供了findAndModify的方法来确保atomic operation(例如商品购买这种购买的同时需要更新数据的)。比如这样的：
```
db.movie.findAndModify(
			{
			query:{'title':'Forrest Gump'},
			update:{$inc:{likes:10}}
			}
		      )
```
query是查找出匹配的文档，和find是一样的，而update则是更新likes这个项目。注意由于MongoDB只支持单个文档的atomic operation，因此如果query出多于一个文档，则只会对第一个文档进行操作。

#### 删除数据：`db.student.remove({"sex":"男"})`
- 注意，上面的例子会删除所有标签包含{"sex":"男"}的数据。如果你只想删除第一个，则`db.movie.remove({"sex":"男"},1)`
- 如果不加任何限制：`db.movie.remove()`会删除movie这个集合下的所有文档。
