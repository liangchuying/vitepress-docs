#### showDirectoryPicker
* 获取所有目录中的文件数据（包括路径），生成一个新的数组
```js
    async function getAllFiles(directoryHandle, directory) {
        let files = [];
        const entries = await directoryHandle.entries();
        for await (const [name, handle] of entries) {
            if (handle.kind === "file") {
                let file = await handle.getFile();
                file.path = directory + '/' + handle.name;
                files.push(file); // set file Object
            } else if (handle.kind === "directory") {
                // 处理子目录
                let path = directory + '/' + handle.name;
                const subDirFiles = await getAllFiles(handle, path);
                files = files.concat(subDirFiles);
            }
        }

        return files; // 返回所有文件名
    }
```