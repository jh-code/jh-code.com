'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">jh-code documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AdminModule-6c525d71a8f637d4ebf636595c736ce9"' : 'data-target="#xs-components-links-module-AdminModule-6c525d71a8f637d4ebf636595c736ce9"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AdminModule-6c525d71a8f637d4ebf636595c736ce9"' : 'id="xs-components-links-module-AdminModule-6c525d71a8f637d4ebf636595c736ce9"' }>
                                        <li class="link">
                                            <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-b6bfb9c02afcc640586f4a6a9bd910ba"' : 'data-target="#xs-components-links-module-AppModule-b6bfb9c02afcc640586f4a6a9bd910ba"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-b6bfb9c02afcc640586f4a6a9bd910ba"' : 'id="xs-components-links-module-AppModule-b6bfb9c02afcc640586f4a6a9bd910ba"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/FooterModule.html" data-type="entity-link">FooterModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-FooterModule-4aeedd5954c78c70a9cd3d889cf44b21"' : 'data-target="#xs-components-links-module-FooterModule-4aeedd5954c78c70a9cd3d889cf44b21"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-FooterModule-4aeedd5954c78c70a9cd3d889cf44b21"' : 'id="xs-components-links-module-FooterModule-4aeedd5954c78c70a9cd3d889cf44b21"' }>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HeaderModule.html" data-type="entity-link">HeaderModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HeaderModule-7bac76eb379131cf586279e502958cc8"' : 'data-target="#xs-components-links-module-HeaderModule-7bac76eb379131cf586279e502958cc8"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HeaderModule-7bac76eb379131cf586279e502958cc8"' : 'id="xs-components-links-module-HeaderModule-7bac76eb379131cf586279e502958cc8"' }>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HomeModule-a12952e810c1811f3762f91aca7d2a84"' : 'data-target="#xs-components-links-module-HomeModule-a12952e810c1811f3762f91aca7d2a84"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HomeModule-a12952e810c1811f3762f91aca7d2a84"' : 'id="xs-components-links-module-HomeModule-a12952e810c1811f3762f91aca7d2a84"' }>
                                        <li class="link">
                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-HomeModule-a12952e810c1811f3762f91aca7d2a84"' : 'data-target="#xs-directives-links-module-HomeModule-a12952e810c1811f3762f91aca7d2a84"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-HomeModule-a12952e810c1811f3762f91aca7d2a84"' : 'id="xs-directives-links-module-HomeModule-a12952e810c1811f3762f91aca7d2a84"' }>
                                        <li class="link">
                                            <a href="directives/VisibleDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">VisibleDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-LoginModule-da8077e5048db8811d45163f68c71900"' : 'data-target="#xs-components-links-module-LoginModule-da8077e5048db8811d45163f68c71900"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-LoginModule-da8077e5048db8811d45163f68c71900"' : 'id="xs-components-links-module-LoginModule-da8077e5048db8811d45163f68c71900"' }>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/NotFoundModule.html" data-type="entity-link">NotFoundModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-NotFoundModule-aea232f4f2166d42b868ebdd365959eb"' : 'data-target="#xs-components-links-module-NotFoundModule-aea232f4f2166d42b868ebdd365959eb"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-NotFoundModule-aea232f4f2166d42b868ebdd365959eb"' : 'id="xs-components-links-module-NotFoundModule-aea232f4f2166d42b868ebdd365959eb"' }>
                                        <li class="link">
                                            <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PageModule.html" data-type="entity-link">PageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PageModule-9ad51c735b8e6ff02174455a13d0a2eb"' : 'data-target="#xs-components-links-module-PageModule-9ad51c735b8e6ff02174455a13d0a2eb"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PageModule-9ad51c735b8e6ff02174455a13d0a2eb"' : 'id="xs-components-links-module-PageModule-9ad51c735b8e6ff02174455a13d0a2eb"' }>
                                        <li class="link">
                                            <a href="components/PageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-PageModule-9ad51c735b8e6ff02174455a13d0a2eb"' : 'data-target="#xs-injectables-links-module-PageModule-9ad51c735b8e6ff02174455a13d0a2eb"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-PageModule-9ad51c735b8e6ff02174455a13d0a2eb"' : 'id="xs-injectables-links-module-PageModule-9ad51c735b8e6ff02174455a13d0a2eb"' }>
                                        <li class="link">
                                            <a href="injectables/SPANavService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SPANavService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TopNavModule.html" data-type="entity-link">TopNavModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TopNavModule-1789cc32bb8bdf458ff3a7bb5593bda0"' : 'data-target="#xs-components-links-module-TopNavModule-1789cc32bb8bdf458ff3a7bb5593bda0"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TopNavModule-1789cc32bb8bdf458ff3a7bb5593bda0"' : 'id="xs-components-links-module-TopNavModule-1789cc32bb8bdf458ff3a7bb5593bda0"' }>
                                        <li class="link">
                                            <a href="components/TopNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopNavComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
