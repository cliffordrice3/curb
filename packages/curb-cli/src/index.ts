#!/usr/bin/env node
import {run as oclifRun} from '@oclif/core';

oclifRun()
  .then(require('@oclif/core/flush'))
  .catch(require('@oclif/core/handle')); 