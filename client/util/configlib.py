# -*- coding: utf-8 -*-
# Copyright (c) 2021-2025 Tencent
#
# This source code file is made available under MIT License
# See LICENSE for details
# ==============================================================================

"""ini格式的配置文件读写工具类
"""

import logging
import configparser

logger = logging.getLogger(__name__)

class ConfigReader(object):
    """配置文件读取工具类"""
    def __init__(self, cfg_string=None, cfg_file=None, interpolation=None, encoding="utf-8-sig"):
        """
        构造函数
        :param cfg_string: ini格式的字符串
        :param cfg_file: ini文件
        :param interpolation: 变量解析方式,默认为None,不解析变量
        :return:
        """
        self._cfg = configparser.ConfigParser(interpolation=interpolation)
        self._cfg.optionxform = str # 设置key值区分大小写
        self._cfg_string = cfg_string
        self._cfg_file = cfg_file
        if self._cfg_string:
            self._cfg.read_string(self._cfg_string)
        else:
            self._cfg.read(self._cfg_file, encoding=encoding)

    def read(self, section_name):
        """
        读取ini格式的配置内容
        :param section_name: 需要读取的块名
        :param cfg_string: str, 配置字符串
        :param cfg_file: str, 配置文件路径
        :return: dict, 配置键值对
        """
        rule_params_dict = {}
        for key, value in self._cfg.items(section_name):
            rule_params_dict[key] = value
        return rule_params_dict

    def get_section_names(self):
        """
        获取所有的section名称
        :return:
        """
        return self._cfg.sections()

class ConfigWriter(object):
    def write(self, file_path, section_name, section_dict, comment_str=None):
        """
        将内容写入文件
        :param file_path:
        :param section_name:
        :param section_dict:
        :param comment_str:
        :return:
        """
        context = ""
        if comment_str:
            context += comment_str
        context += "\n"

        context += "[%s]\n" % section_name

        for key, value in section_dict.items():
            line = format(key, '<12') + ": "
            if value:
                line += value
            line += "\n"
            context += line

        with open(file_path, 'w') as wf:
            wf.write(context)





