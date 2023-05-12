function Dialog(props) {
  console.log(props.value.toString());
  return (
    <dialog show={props.value.toString()}>
      <div className="image-warpper">
        <h1>HAHAHAHAHAHAH</h1>
      </div>
      <button className="close">close</button>
    </dialog>
  )
}

export default Dialog
// <img alt={'XiaoGou'} src={'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/XiaoGou01.jpeg'} />