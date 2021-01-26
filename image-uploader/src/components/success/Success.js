import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import successStyles from "./success.css";

class Success extends React.Component {
  state = {
    value: this.props.imageAsUrl.imgUrl,
    copied: false,
  };

  render() {
    return (
      <div style={{ successStyles }} className="card">
        <span className="material-icons done-icon">done</span>
        <h1 className="text-bg success-h">Uploaded Successfully!</h1>

        <img className="upload-img" src={this.props.imageAsUrl.imgUrl} alt="" />
        <div className="input-group">
          <input
            className="link-input"
            value={this.state.value}
            onChange={({ target: { value } }) =>
              this.setState({ value, copied: false })
            }
          />

          <CopyToClipboard
            text={this.state.value}
            onCopy={() => {
              this.setState({ copied: true });
              setTimeout(() => {
                this.setState({ copied: false });
              }, 3000);
            }}
          >
            <button className="btn btn-link">
              {this.state.copied ? "Copied!" : "Copy Link"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}

export default Success;
