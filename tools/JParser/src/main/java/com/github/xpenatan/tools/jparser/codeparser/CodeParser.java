package com.github.xpenatan.tools.jparser.codeparser;

import com.github.javaparser.ast.body.ConstructorDeclaration;
import com.github.javaparser.ast.body.FieldDeclaration;
import com.github.javaparser.ast.body.MethodDeclaration;

/** @author xpenatan */
public interface CodeParser {
    void parseCodeBlock(CodeParserItem parserItem);
    void parseHeaderBlock(CodeParserItem parserItem);
    void onParseConstructor(ConstructorDeclaration constructorDeclaration);
    void onParseMethod(MethodDeclaration methodDeclaration);
    void onParseField(FieldDeclaration fieldDeclaration);
}