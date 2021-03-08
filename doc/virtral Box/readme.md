安装centos参考https://www.osyunwei.com/archives/7829.html


下载virtual Box
下载Centos镜像   http://mirrors.aliyun.com/centos/7/isos/x86_64/                   CentOS-7-x86_64-Everything-2009.iso

在虚拟机中新建安装Centos系统

virtualBox
centos7
ip 192.168.3.199
name: root
pwd: hjz1595144933

mysql
name: root
pwd: admin888

虚拟机命令


ifconfig不是命令
yum install net-tools
若安装失败

则测试网络
ping www.baidu.com
二、设置IP地址、网关DNS
说明：CentOS 7.0默认安装好之后是没有自动开启网络连接的！
cd  /etc/sysconfig/network-scripts/  #进入网络配置文件目录
vi  ifcfg-设备名  #编辑配置文件，添加修改以下内容
HWADDR=00:0C:29:8D:24:73
TYPE="Ethernet"   # 网络类型为以太网
NAME="ens33"  # 网卡设备名，设备名一定要跟文件名一致
DEVICE="ens33"  # 网卡设备名，设备名一定要跟文件名一致
ONBOOT="yes"  # 该网卡是否随网络服务启动
BOOTPROTO=static  #启用静态IP地址（动态Ip则为dhcp）
DEFROUTE=yes
PEERDNS=yes
PEERROUTES=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_PEERDNS=yes
IPV6_PEERROUTES=yes
IPV6_FAILURE_FATAL=no
UUID=ae0965e7-22b9-45aa-8ec9-3f0a20a85d11
IPADDR0=192.168.21.128  #设置IP地址（前三位与本机ipv4（可在网络-属性）前三位一致）
PREFIXO0=24  #设置子网掩码
GATEWAY0=192.168.21.2  #设置网关
DNS1=8.8.8.8  #设置主DNS
DNS2=8.8.4.4  #设置备DNS
保存退出

若是动态ip（比如wifi），则内容为
DEVICE=eth0
ONBOOT=yes
BOOTPROTO=dhcp  


service network restart   #重启网络
ping www.baidu.com  #测试网络是否正常

hostname  www  #设置主机名为www
vi /etc/hostname #编辑配置文件
www   #修改localhost.localdomain为www
:wq!  #保存退出
vi /etc/hosts #编辑配置文件
127.0.0.1   localhost  www   #修改localhost.localdomain为www
:wq!  #保存退出
shutdown -r now  #重启系统

yum install net-tools

否则ifconfig查看是否成功

防火墙
在学习阶段可以先关闭防火墙，保证端口不受访问限制，以下是LINUX管理防火墙的基本指令
sudo systemctl stop firewalld.service 
练习时也可以永久关闭防火墙
sudo systemctl disable firewalld.service
查看防火墙状态
sudo systemctl status firewalld.service

关闭setlinux
修改配置文件
sudo vim /etc/selinux/config
修改 SELINUX 值为disabled，永久有效但需要重起系统
SELINUX=disabled
可以执行以下命令，立刻生效（建议和上面命令一起使用）
setenforce 0



git 
yum install git             
git --version


nvm(node npm(express-generator pm2))
git clone git://github.com/creationix/nvm.git ~/nvm
command -v nvm
echo "source ~/nvm/nvm.sh" >> ~/.bashrc
source ~/.bashrc            
nvm --version

nvm install v10.14.0
nvm use v10.14.0          
node -v    
npm -v
npm install -g express-generator

docker(mysql  php  nginx )

anaconda-ks.cfg
系统安装的时候生成的一个文件，通过这个文件可以修改成自动安装的脚本,用于自动安装同样配置的系统
