export interface IBtnList {
  BtnData: { text: string; type: string; btnType: string; linkTo?: string }[] | undefined;
  listClassnameProps?: string;
  btnClassnameProps?: string;
}
