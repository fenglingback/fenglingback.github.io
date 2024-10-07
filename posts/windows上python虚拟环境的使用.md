
windows上python虚拟环境的使用


**1\. 创建虚拟环境**

首先，您需要使用 `venv` 模块来创建一个虚拟环境。[1](https://docs.python.org/3/library/venv.html) 在您的项目目录中打开命令行，并执行以下命令：

`python -m venv .venv`

这将在当前目录下创建一个名为 `.venv` 的文件夹，该文件夹包含一个独立的 Python 环境。[2](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

**2\. 激活虚拟环境**

创建虚拟环境后，您需要激活它才能使用它。[2](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/) 进入 `.venv` 文件夹的 `Scripts` 子目录，并执行以下命令：

`.\Scripts\activate`

激活后，您的命令提示符会发生变化，例如，它会显示 `.venv` 作为前缀。[2](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

**3\. 退出虚拟环境**

当您完成项目开发后，可以使用 `deactivate` 命令退出虚拟环境。[2](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

**4\. 管理依赖项**

您可以使用 `pip freeze` 命令来查看当前虚拟环境中已安装的依赖项。[2](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/) 将结果保存到一个名为 `requirements.txt` 的文件中：

`pip freeze > requirements.txt`

您可以在其他机器上使用 `pip install -r requirements.txt` 命令来快速安装相同版本的依赖项。[2](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

