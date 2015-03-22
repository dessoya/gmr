
drop table modules;
create table modules (

	module_uuid uuid,
	name varchar,

	version varchar,

	files_list list<uuid>,

	primary key (module_uuid)
)