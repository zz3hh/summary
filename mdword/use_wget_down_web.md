利用wget进行网站下载
========================
# 首先安装brew
首先百度了一下，建议使用brew安装

所以首先第一先安装brew

安装命令  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

等待安装完成后，运行brew --help 查看是否安装完成

#利用brew安装wget

安装命令 brew install wget

等待安装成功后，运行wget --help 查看是否安装成功

#wget实战一下

首先个人参照的文章地址 
[http://blog.csdn.net/taiyang1987912/article/details/42387631](http://blog.csdn.net/taiyang1987912/article/details/42387631)

在此推荐一个比较好的网站模板的网站[themeforest](http://themeforest.net/)

首先看看哪个网站比较漂亮，然后我们就下载下来
第一先找到您要看的网站模板，收钱的模板质量可能高些，但是我们不希望付钱怎么办？那只有倒下来了

此网站的结构属于iframe内嵌的，所以审查元素，找到真正的url,现在打开的网址，http://themes.umbrella.al/?theme=theblog，
然后查看元素，找到真正的URL http://www.blog.umbrella.al/1/ [点击此处打开](http://www.blog.umbrella.al/1/)

然后执行的 wget -r -p -np -k http://www.blog.umbrella.al/1/

执行之前先创建一个文件夹，最起码防止文件错乱
