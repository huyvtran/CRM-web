import React from 'react';
import { Form, Button, Upload, Icon, Input, message, Select } from 'antd';
import _ from 'lodash';
import RadioGroup from 'antd/lib/radio/group';
import RadioButton from 'antd/lib/radio/radioButton';
import * as architectureService from '../../services/architectureService';
import * as config from '../../utils/config';
import styles from './architecture.less';

const { api, baseURL } = config;
const { record_data_upload, record_data_download } = api;
const FormItem = Form.Item;
const Dragger = Upload.Dragger;

const scopeStyles = {
  nowrap: {
    whiteSpace: 'nowrap',
  },
  loadingIcon: {
    fontSize: 12,
    marginLeft: 5,
  },
};

const loadingIcon = <Icon type="loading" style={scopeStyles.loadingIcon} spin />;

class Architecture extends React.Component {
  state = {
    log: '',
    objects: [],
    objectsLoading: true,
    recordTypes: [],
    fileTypes: ['csv', 'excel'],
    recordTypesLoading: false,
    uploadurl: '',
    downloadurl: '',
    DownloadFilter: {
      object_describe_api_name: '',
      fileType: 'csv',
    },
    UploadFilter: {
      object_describe_api_name: '',
    },

    /**
     * 数据删除模式，默认为false
     */
    mode: 'save',
  };

  componentWillMount() {
    architectureService.fetch({ page: 1 }).then((response) => {
      const objects = response.data;
      this.setState({
        objects,
        objectsLoading: false,
      });
    });
  }

  onUploadSelect = (value) => {
    const { UploadFilter } = this.state;
    UploadFilter.object_describe_api_name = value;
    this.setState({
      UploadFilter,
    });
  };
  onDownSelect = (value) => {
    const { DownloadFilter } = this.state;
    DownloadFilter.object_describe_api_name = value;
    this.setState({
      DownloadFilter,
    }, this.fetchRecordTypes.bind(this, value));
  };
  onRecordTypeSelect = (value) => {
    const { DownloadFilter } = this.state;
    DownloadFilter.recordType = value;
    this.setState({
      DownloadFilter,
    });
  };
  onFileTypeSelect = (value) => {
    const { DownloadFilter } = this.state;
    DownloadFilter.fileType = value;
    this.setState({
      DownloadFilter,
    });
  };
  /**
   * 根据对象获取记录类型
   */
  fetchRecordTypes = async (value) => {
    this.setState({
      recordTypesLoading: true,
    });
    const response = await architectureService.fetchByApiName({
      object_api_name: value,
    }, false);
    if (_.get(response, 'data')) {
      const result = _.get(response, 'data.record_types', []);
      this.setState({
        recordTypes: _.uniq([...result, 'master']),
        recordTypesLoading: false,
      });
    }
  };
  DownSelector = () => {
    const { objects } = this.state;
    const options = objects.map((x) => (
      <Select.Option key={`obj-${x.api_name}`} value={x.api_name}>{x.display_name}</Select.Option>
    ));
    return (
      <Select placeholder="请选择导出业务对象" style={{ minWidth: 150 }} onChange={this.onDownSelect}>
        {options}
      </Select>
    );
  };
  RecordTypeSelector = () => {
    const { recordTypes } = this.state;
    const options = recordTypes.map((x) => (
      <Select.Option key={`obj-${x}`} value={x}>{x}</Select.Option>
    ));
    return (
      <Select placeholder="请选择记录类型" style={{ minWidth: 150 }} onChange={this.onRecordTypeSelect}>
        {options}
      </Select>
    );
  };
  FileTypeSelector = () => {
    const options = this.state.fileTypes.map((value) => {
      return <Select.Option key={value}>{value}</Select.Option>;
    });
    return (
      <Select defaultValue="csv" style={{ minWidth: 150 }} onChange={this.onFileTypeSelect}>
        {options}
      </Select>
    );
  };
  UploadSelector = () => {
    const { objects } = this.state;
    const options = objects.map((x) => (
      <Select.Option key={`obj-${x.api_name}`} value={x.api_name}>{x.display_name}</Select.Option>
    ));
    return (
      <Select placeholder="请选择导入业务对象" style={{ minWidth: 150 }} onChange={this.onUploadSelect}>
        {options}
      </Select>
    );
  };
  beforeUpload = (file) => {
    const { mode } = this.state;
    const token = localStorage.getItem('token');
    const filter = this.state.UploadFilter;
    const ApiName = filter.object_describe_api_name;
    const url = `${baseURL}${record_data_upload.replace('{api_name}', ApiName)}?token=${token}&mode=${mode}`;

    if (!_.isEmpty(ApiName)) {
      this.setState({
        uploadurl: url,
      });
    } else {
      message.error('请选择上传类型!');
      return false;
    }
  };
  DownLoad = (e) => {
    const token = localStorage.getItem('token');
    const filter = this.state.DownloadFilter;
    const ApiName = filter.object_describe_api_name;
    if (!_.isEmpty(ApiName)) {
      let url = `${baseURL}${record_data_download.replace('{api_name}', ApiName)}?token=${token}`;
      const { recordType } = filter;
      const { fileType } = filter;
      if (recordType && fileType) {
        url = `${url}&recordType=${recordType}&fileType=${fileType}`;
      }
      this.setState({
        downloadurl: url,
      });
    } else {
      message.error('请选择导出类型!');
      e.preventDefault();
      return false;
    }
  };

  Upload = (e) => {
    const { mode } = this.state;
    const token = localStorage.getItem('token');
    const filter = this.state.UploadFilter;
    const ApiName = filter.object_describe_api_name;
    const url = `${baseURL}${record_data_upload.replace('{api_name}', ApiName)}?token=${token}&mode=${mode}`;
    if (!_.isEmpty(ApiName)) {
      this.setState({
        uploadurl: url,
      });
    } else {
      message.error('请选择上传类型!');
      return false;
    }
  };

  changeMode = (e) => {
    const { mode } = this.state;
    this.setState({
      mode: e.target.value,
    }, () => {

    });
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
    };
    const props = {
      name: 'file',
      multiple: true,
      showUploadList: true,
      action: this.state.uploadurl,
      onChange(info) {
        console.log(info);
        if (info.file.response) {
          const res = info.file.response;
          if (res.head) {
            const insertSize = res.body.insertSize;
            const updateSize = res.body.updateSize;
            const deleteSize = res.body.deleteSize;
            const result = res.body.result || '[无]';
            const gpsSize = res.body.gpsSize;
            if (insertSize || updateSize || deleteSize || gpsSize) {
              if (res.head.code === 200 && (insertSize > 0 || updateSize > 0)) {
                message.success(`${info.file.name} 上传成功! 新增记录：${insertSize}条，更新记录：${updateSize} 条, 详细信息: ${result}.`);
              } else if (deleteSize > 0) {
                message.success(`${info.file.name} 上传成功! 删除记录：${deleteSize}条, 详细信息: ${result}.`);
              } else if (gpsSize > 0) {
                message.success(`${info.file.name} 上传成功! 进行地理编码记录：${gpsSize}条, 详细信息: ${result}.`);
              } else {
                message.error(`${info.file.name} 上传失败! 新增记录：${insertSize}条，更新记录：${updateSize} 条, 详细信息: ${result}.`);
              }
            } else if (insertSize === undefined) {
              const num = 0;
              message.error(`${info.file.name} 上传失败!条数为：${num}`);
            } else if (res.head.code === 400) {
              message.error(`上传失败! ${res.head.msg}`, 10);
            }
          } else if (res.status === 500 || 403) {
            message.error(`${info.file.name} 错误信息：${res.message}`);
          }
        }
      },
    };
    const { recordTypesLoading, objectsLoading, fileTypesLoading, mode } = this.state;
    return (
      <div>
        <h1 className={styles.h1}>业务数据导出</h1>
        <hr className={styles.hr} />
        <Form>
          <FormItem {...formItemLayout} label="请选择导出类型：" hasFeedback style={scopeStyles.nowrap}>
            {this.DownSelector()}
            {objectsLoading ? loadingIcon : null}
          </FormItem>
          <FormItem {...formItemLayout} label="请选择记录类型：" hasFeedback style={scopeStyles.nowrap}>
            {this.RecordTypeSelector()}
            {recordTypesLoading ? loadingIcon : null}
          </FormItem>
          <FormItem {...formItemLayout} label="请选择文件类型：" hasFeedback style={scopeStyles.nowrap}>
            {this.FileTypeSelector()}
            {fileTypesLoading ? loadingIcon : null}
          </FormItem>
          <FormItem wrapperCol={{ span: 12, offset: 8 }}>
            <Button type="primary" offset={5} className={styles.buttonStyle} onClick={this.DownLoad}>
              <a href={this.state.downloadurl} target="_top"><Icon type="download" />导出</a>
            </Button>
          </FormItem>
        </Form>
        <h1 className={styles.h1}>业务数据导入</h1>
        <hr className={styles.hr} />
        <Form>
          <FormItem {...formItemLayout} label="请选择导入类型：" hasFeedback style={scopeStyles.nowrap}>
            {this.UploadSelector()}
            {objectsLoading ? loadingIcon : null}
          </FormItem>
          <FormItem {...formItemLayout} label="导入模式" hasFeedback style={scopeStyles.nowrap}>
            <RadioGroup onChange={this.changeMode} defaultValue="save">
              <RadioButton value="save">保存</RadioButton>
              <RadioButton value="delete" style={{ paddingLeft: 10 }}>删除</RadioButton>
            </RadioGroup>
          </FormItem>
          <FormItem {...formItemLayout} label="请选择文件：" hasFeedback>
            <Dragger {...props} beforeUpload={this.beforeUpload}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">点击此处或将文件拖拽到这里上传</p>
              <p className="ant-upload-hint">支持单文件和多文件上传</p>
            </Dragger>
            {/* <Upload name="logo" beforeUpload={this.beforeUpload} listType="picture">
                          <Button>
                              <Icon type="upload" /> 上传文件
                            </Button>
                        </Upload> */}
          </FormItem>
        </Form>
        <Form>
          <FormItem {...formItemLayout} label="导入异常日志：" hasFeedback>
            <Input type="textarea" autosize={{ minRows: 2, maxRows: 6 }} value={this.state.log} />
          </FormItem>
        </Form>
        {/* <FormItem wrapperCol={{ span: 12, offset: 8 }}>
                  <Button type="primary" offset={5} className={styles.buttonStyle} onClick={this.Upload}>
                      <a href={this.beforeUploadUrl} target="_top"><Icon type="download" />导入</a>
                    </Button>
                </FormItem> */}
      </div>);
  }
}

export default Architecture;
