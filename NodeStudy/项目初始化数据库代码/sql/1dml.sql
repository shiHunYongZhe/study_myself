use testqrmaster;
/*集群角色权限表*/
DROP TABLE IF EXISTS tb_community_authority;
CREATE TABLE tb_community_authority(
	id tinyint unsigned AUTO_INCREMENT PRIMARY KEY COMMENT '主键',
	name varchar(20) NOT NULL COMMENT '名称',
	`createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	description varchar(500) NOT NULL COMMENT '描述'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='集群角色权限表';