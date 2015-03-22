
drop table files;
create table files (

	file_uuid uuid,
	path varchar,
	timestamp bigint,

	content text,
	
	primary key (file_uuid)
)