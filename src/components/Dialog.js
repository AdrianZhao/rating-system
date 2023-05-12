function Dialog(props) {
  return (
    <dialog open={props.value}>
      <div className="image-wrapper">
        <img alt={'XiaoGou'} src={'https://raw.githubusercontent.com/AdrianZhao/react-gh-pages/master/src/image/XiaoGou01.jpeg'} />
      </div>
    </dialog>
  )
}

export default Dialog
