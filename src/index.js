import { run } from "./app";

import { ComponentService } from "./services/ComponentService";
import { AlertService } from "./services/AlertService";

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
console.log("J");
