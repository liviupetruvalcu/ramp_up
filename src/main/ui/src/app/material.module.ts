import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatTabsModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatSelectModule, MatCardModule } from '@angular/material';
import { MatGridListModule} from '@angular/material/grid-list'

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatTabsModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatSelectModule, MatCardModule],
    exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatTabsModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatSelectModule, MatCardModule],
})

export class MaterialModule {}