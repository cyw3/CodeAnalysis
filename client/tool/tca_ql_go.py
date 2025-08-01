#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# Copyright (c) 2021-2025 Tencent
#
# This source code file is made available under MIT License
# See LICENSE for details
# ==============================================================================


from util.logutil import LogPrinter
from tool.util.tca_ql import TcaQl


logger = LogPrinter()


class TcaQlGo(TcaQl):
    def __init__(self, params):
        super().__init__(params)

    def compile(self, params):
        lang = "go"
        super().compile(params, lang)

    def analyze(self, params):
        lang = "go"
        issues = super().analyze(params, lang)
        return issues

tool = TcaQlGo

if __name__ == "__main__":
    pass