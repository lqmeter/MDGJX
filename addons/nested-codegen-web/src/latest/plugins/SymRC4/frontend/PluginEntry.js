const {
  _,
  Xterm,
  GFormSelect,
  Blink,
  HalfResizeForTwoHorizontal,
  GEditor,
  OperationPanel,
  BluePrintPopover,
  Mobx,
  MobxReact,
  HalfResizeForTwo,
  MobxReactLite,
  ProgressBar,
  GSyncSelectWithFilter,
  Dialog,
  Popover,
  Radio,
  ButtonGroup,
  TextArea,
  Intent,
  observer,
  Position,
  Toaster,
  Checkbox,
  ContextMenu,
  NumericInput,
  FormGroup,
  HTMLSelect,
  ControlGroup,
  InputGroup,
  Navbar,
  NavbarHeading,
  NonIdealState,
  NavbarDivider,
  NavbarGroup,
  Alignment,
  Classes,
  Tree,
  Icon,
  Card,
  Elevation,
  Button,
  PanelStack2,
  Spinner,
  Callout,
  PanelStack,
  gstore,
  AnchorButton,
  Tooltip,
  Drawer,
  Overlay,
  Alert,
  RadioGroup,
  Menu,
  MenuItem,
  MenuDivider,
  BluePrintTable,
  autorun,
  ColumnHeaderCell,
  Cell,
  Column,
  Table,
  Regions,
  BluePrintDocs,
  BluePrintCpt,
  observable,
  gutils,
  ReactDOM,
  
  useEffect,
  useCallback,
  useContext,
  useMemo,
  useState,
  useAsObservableSource,
  useLocalStore,
  useObserver,
  Provider,
  Router,
  inject,
  Html_select,
  BeautifyCodeCommon,
  prettier,
  xmlutils,
  createHistory,
  withRouter,
  Switch,
  Route,
  Link,
  useHistory,
} = window.CodeGenDefinition;
import encode_config from "../../EncryptSM2/frontend/encode_config";
import GFormInput2 from "../../SQLDrafts/frontend/Kit_GFormInput2";
import cutils from "../../TranslateForJSON/frontend/kit/common_utils";
import cypto_logic from "../../TranslateForJSON/frontend/kit/cypto_utils";
import fn_otherPages from "../../TranslateForJSON/frontend/pages/otherPages";
import PreRequisiteJson from "../pre-requisite.json";

let crtRCType = "RC4";
let appTitle = crtRCType + " Algorithm";
let metaObj = {
  appId: "ROOT_EXTENSION_ADDONS",
  appName: appTitle,
};

window.ExtensionDefinition["ROOT_EXTENSION_ADDONS"] = cypto_logic.getRCFn({
  crtRCType,
  metaObj,
  appTitle,
  PreRequisiteJson,
  fn_otherPages,
  cutils,
  GFormInput2,
  encode_config,
});
