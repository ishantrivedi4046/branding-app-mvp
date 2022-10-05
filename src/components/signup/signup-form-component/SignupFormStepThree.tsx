import React, { FC, memo, useContext, useEffect, useState } from 'react';
import { notification, Upload } from 'antd';
import '../../../styles/component/signup/signup-form/signup-form-step-three.styles.scss';
import { PlusOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/lib/upload';
import Axios from 'axios';
import { FormContext } from 'redux/context';
import { InfluencerProfileApiKeys } from 'constants/signup/signup-api.constant';
import { get, isEqual } from 'lodash';
import { FILE_UPLOAD_URL } from 'constant/restUri.constant';

type SignupFormStepThreeProps = {};

const { Dragger } = Upload;

const SignupFormStepThree: FC<SignupFormStepThreeProps> = () => {
  const { getFromForm, setIntoForm } = useContext(FormContext);
  const [uploadImageURLS, setUploadedImageURLS] = useState<string[]>(
    getFromForm(InfluencerProfileApiKeys.PORTFOLIO, []) as string[]
  );

  useEffect(() => {
    const prevURLs = getFromForm(InfluencerProfileApiKeys.PORTFOLIO, []);
    if (!isEqual(prevURLs, uploadImageURLS)) {
      setIntoForm(InfluencerProfileApiKeys.PORTFOLIO, uploadImageURLS);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadImageURLS]);

  async function handleImageUpload(file: RcFile) {
    const form = new FormData();
    form.append('image', file, file.name);
    const source = Axios.CancelToken.source();
    try {
      const response: { image: string } = await Axios.request({
        url: FILE_UPLOAD_URL,
        method: 'POST',
        data: form,
        cancelToken: source.token,
      });
      const imageURL = get(response, ['data', 'image']);
      if (imageURL) {
        notification.success({
          message: `Successfully Uploaded ${file?.name}`,
        });
        setUploadedImageURLS((prevURLs) => [...prevURLs, imageURL]);
      }
    } catch (error: any) {
      notification.error({
        message: `Failed to upload ${file?.name}`,
      });
    }
  }

  return (
    <div className='signup-form-step-3'>
      <div className='text-row'>
        <span className='lable'>01/01</span>
        <span className='title'>Upload Some Images Of You</span>
      </div>
      <div className='drag-upload-container'>
        <Dragger
          showUploadList={false}
          maxCount={6}
          multiple
          beforeUpload={(file) => {
            handleImageUpload(file);
            return false;
          }}
        >
          <div className='message'>
            <div>Drag some files here</div>
            <div className='sub-message'>4-6 IMAGES</div>
          </div>

          <div className='upload-container'>
            <div className='upload-button'>
              <PlusOutlined />
              <span className='upload-button-text'>Upload New</span>
            </div>
          </div>
        </Dragger>
      </div>
    </div>
  );
};

export default memo(SignupFormStepThree);
