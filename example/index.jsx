import React from "react";
import ReactDOM from "react-dom";
import BraftFinder, { ImageUtils } from "../src";

export const ValidType = {
  PNG: 'image/png',
  GIF: 'image/gif',
  JPEG: 'image/jpeg',
  WEBP: 'image/webp',
  APNG: 'image/apng',
  SVG: 'image/svg',
  MP4: 'video/mp4',
  MP3: 'video/mp3'
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.braftFinder = new BraftFinder({});
  }

  beforeRemove = items => {
    return confirm("确认删除这些项目?");
  };

  handelFileSelect = files => {
    console.log('get', files)
    return [].slice.call(files, 0, 3);
  };

  render() {
    const FinderComponent = this.braftFinder.ReactComponent;

    return (
      <div className="demo">
        <FinderComponent
          accepts={{
            image: [ ValidType.PNG, ValidType.JPEG, ValidType.GIF, ValidType.WEBP, ValidType.APNG, ValidType.SVG ].join(','),
            video: ValidType.MP4,
            audio: ValidType.MP3
          }}
          language="zh"
          onSelect={item => console.log("seleced:", item)}
          onBeforeSelect={item => console.log("will select:", item)}
          onDeselect={item => console.log("deselected:", item)}
          onBeforeDeselect={item => console.log("will deselect:", item)}
          onInsert={items => console.log("insert:", items)}
          onBeforeInsert={items => console.log("will insert:", items)}
          onRemove={items => console.log("removed", items)}
          onBeforeRemove={this.beforeRemove}
          onFileSelect={this.handelFileSelect}
        />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.querySelector("#root"));
