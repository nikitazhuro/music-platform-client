import React, { useRef } from 'react';

interface IFileUploaderProps {
  accept: string;
  children: React.ReactNode;
  setFile: Function;
}

const FileUploader: React.FC<IFileUploaderProps> = ({
  accept,
  children,
  setFile,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setFile(e.target.files[0]);
  }
  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type="file"
        hidden
        accept={accept}
        ref={ref}
        onChange={onChangeHandler}
      />
      {children}
    </div>
  )
}

export default FileUploader;
