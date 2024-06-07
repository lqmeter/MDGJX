
package cc.codegen.plugins.JWTEncoder

import cc.codegen.plugins.JWTEncoder.handler.JWTEncoderHandler
import cc.codegen.plugins.specification.CodeGenInitializer
import cc.codegen.plugins.specification.CodeGenPluginHandler

class LightingBoot extends CodeGenInitializer {
    @Override
    List<CodeGenPluginHandler> getHandlers() {
        return [
                new JWTEncoderHandler()
        ]
    }
}
