select * from b_user a, b_user_right b where a.user_id = b.r_id;


/* 博客插入 */
insert into b_blog values(
2,
1,
'20180817144305',
'这是一段备注文字',
1,
'<div>hello，大家好，我系古天乐！我系渣渣辉</div>'
);

select * from b_blog;

select now() from dual;

insert into b_blog values(
3,
1,
'',
'这是一段备注文字',
1,
'<div>hello，大家好，我系古天乐！我系渣渣辉</div>'
);

alter table b_blog change blog_public_time blog_public_time datetime not null default now();

/*建表*/
create table b_user(
	user_id int(10) not null primary key auto_increment,
	user_name char(20) not null,
	user_password char(20) not null,
	...
	
);


create table b_blog(
	blog_id int(10) not null primary key auto_increment,
	blog_user_id int(10) not null,
	blog_public_time datetime not null default current_timestamp,
	blog_note char(20),
	blog_comment_id char(20),
	blog_body Blob
);
/* 页面上传文件至服务器，并将引用路径存放在数据表中 */
create table b_imge(
	img_id int(10) not null primary key auto_increment,
	img_url chart(30) not null,
	img_event_id int(10) 
);

/*  简历表 */
create table b_resume(
	resume_id int(10) not null primary key auto_increment,
	resume_job char(20) ,
	resume_skill char(50) ,
	resume_desc char(50),
	resume_hobby char(100),
	resume_experience_id int(10) not null
)

/* 简历明细 */
create table b_resume_list(
	list_id int(10) not null primary key auto_increment,
	list_time char(20) ,
	list_job char(50),
	list_performance Blob
);


