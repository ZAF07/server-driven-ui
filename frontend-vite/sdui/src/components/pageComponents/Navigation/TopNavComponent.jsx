const TopNavComponent = ({custom, product}) => {
  console.log('PRODUCT STATE FROM TopNavComponent VIA props ==> ', product.products);
  return (
    <>
      <h3>‼️ TopNavComponent ‼️</h3>
      <p style={{backgroundColor: custom.style.backgroundColor}}>{custom.position}</p>
    </>
  )
}

export default TopNavComponent;