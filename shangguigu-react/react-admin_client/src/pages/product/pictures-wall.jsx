import { Upload, Icon, Modal, message } from 'antd';
import React from 'react'
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      // {
      //   uid: '-1',//每个file都有自己唯一的id
      //   name: 'xxx.png',//图片的文件名
      //   status: 'done',//图片的状态，done已上传，uploading正在上传，removed已删除
      //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      // },
    ],
  };

  //关闭大图浏览
  handleCancel = () => this.setState({ previewVisible: false });

  //
  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };
  //file当前操作的图片文件（上传/删除）
  //fileList:所有已上传的文件对象的数组
  handleChange = ({ file,fileList }) => {
    console.log(file);
    if(file.status==='done'){
      const result=file.response
      if(result.status===0){

      
      const {name,url}=result.data
      file=fileList[fileList.length-1]
      file.name=name
      file.url=url
        message.success("上传成功")
      }else{
        message.error("上传失败")
      }
    }
      this.setState({ 
        fileList 
      });

}

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          accept="image/*"// 上传图片的格式
          name="image"//后台上传的参数名字
          action="/manage/img/upload"//上传到后台的弟地址
          listType="picture-card"//图片显示的格式 
          fileList={fileList}//所有已上传图片文件对象的数组
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
