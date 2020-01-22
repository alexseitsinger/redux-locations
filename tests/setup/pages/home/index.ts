import { connect } from "react-redux"

import mapStateToProps from "./mapStateToProps"
import mapDispatchToProps from "./mapDispatchToProps"
import Component from "./component"

export default connect(mapStateToProps, mapDispatchToProps)(Component)
